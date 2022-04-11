import { PrismaClient } from '@prisma/client';
import { IPlanModel, IPlant, IOpsInfo } from '../interface/interfaces';
import exclude from '../helpers/exclude';
import plantsNeedSun from '../helpers/plantsNeedSun';

const prisma = new PrismaClient();

class Plant implements IPlanModel {
  async getPlants(): Promise<IPlant[]> {
    const plants: IPlant[] | null = await prisma.plant.findMany({
      include: {
        specialCare: {
          select: {
            waterFrequency: true,
          },
        },
      },
    });

    return plants;
  }

  async getPlantById(id: string): Promise<IPlant | null> {
    const plant: IPlant | null = await prisma.plant.findUnique({
      where: { id },
      include: {
        specialCare: {
          select: {
            waterFrequency: true,
          },
        },
      },
    });

    if (!plant) return null;

    return plant;
  }

  async removePlantById(id: string): Promise<IPlant | null> {
    const plant: IPlant = await prisma.plant.delete({
      where: { id },
      include: {
        specialCare: {
          select: {
            waterFrequency: true,
          },
        },
      },
    });

    if (!plant) return null;

    return plant;
  }

  async savePlant(plant: IPlant): Promise<IPlant> {
    const initPlant = Plant.initPlant(plant);
    const care = initPlant.specialCare !== null 
      && initPlant.specialCare.waterFrequency && await prisma.special_care.create({
      data: { waterFrequency: initPlant.specialCare?.waterFrequency },
    });
    const newPlant = await prisma.plant.create({
      data: { 
        breed: initPlant.breed,
        size: initPlant.size,
        needsSun: initPlant.needsSun,
        origin: initPlant.origin,
        specialCareId: (care && care.id) || null,
       },
       include: { specialCare: { select: { waterFrequency: true } } },
    });
    const { id, createdPlants } = await prisma.ops_info.findFirst() as IOpsInfo;
    
    await prisma.ops_info.update({ where: { id }, data: { createdPlants: createdPlants + 1 } });
    return exclude(newPlant, 'specialCareId');
  }

  async editPlant(plantId: string, newPlant: IPlant): Promise<IPlant | null> {
    const plantById: IPlant | null = await this.getPlantById(plantId);
    if (!plantById) return null;
    const care = await Plant.updateSpecialCare(newPlant, plantById.specialCareId as string);
    
    const updatedPlants = await prisma.plant.update({
      where: { id: plantId },
      data: { breed: newPlant.breed,
        size: newPlant.size,
        needsSun: newPlant.needsSun,
        origin: newPlant.origin,
        specialCareId: (care && care.id) || null,
       },
       include: { specialCare: { select: { waterFrequency: true } } },
    });
    return updatedPlants;
  }

  async getPlantsThatNeedsSunWithId(id: string): Promise<IPlant[]> {
    const plants = await this.getPlants();
    const filteredPlants = plants.filter(plantsNeedSun(id));
    return filteredPlants;
  }

  private static async updateSpecialCare(newPlant: IPlant, plantById: string) {
    const care = newPlant.specialCare !== null 
      && newPlant.specialCare.waterFrequency 
    && await prisma.special_care.update({
      where: { id: plantById as string },
      data: { waterFrequency: newPlant.specialCare?.waterFrequency },
    });
    
    return care;
  }

  private static initPlant(plant: IPlant) {
    const { id, breed, needsSun, origin, specialCare, size } = plant;

    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

    const newPlant: IPlant = {
      id,
      breed,
      needsSun,
      origin,
      specialCare: {
        ...specialCare,
        waterFrequency,
      },
      size,
    };
    return newPlant;
  }
}

export default Plant;
