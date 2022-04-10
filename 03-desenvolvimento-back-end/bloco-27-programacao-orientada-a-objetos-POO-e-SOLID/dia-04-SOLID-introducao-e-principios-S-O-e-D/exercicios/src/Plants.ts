import fs from 'fs/promises';
import { randomUUID } from 'crypto';
import { IPlant, IOpsInfo } from './interface';
import plantsNeedSun from './helpers/plantsNeedSun';

const plantJson = 'plants.json';

class Plants {
  async getPlants() {
    const plants: IPlant[] = await Plants.read(plantJson);
    return plants;
  }

  async getPlantById(id: string) {
    const plants: IPlant[] = await Plants.read(plantJson);

    const plantById = plants.find((plant) => plant.id === id);
    if (!plantById) return null;
    return plantById;
  }

  async removePlantById(id: string) {
    const plants: IPlant[] = await Plants.read(plantJson);

    const removedPlant = plants.find((plant) => plant.id === id);
    if (!removedPlant) return null;

    const newPlants = plants.filter((plant) => plant.id !== id);
    await Plants.write(plantJson, newPlants);

    return removedPlant;
  }

  async savePlant(plant: IPlant) {
    const plants: IPlant[] = await this.getPlants();

    const newPlant = Plants.initPlant({ ...plant, id: randomUUID() });
    plants.push(newPlant);

    let { createdPlants }: IOpsInfo = await Plants.read('opsInfo.json');
    createdPlants += 1;
    await Plants.write('opsInfo.json', { createdPlants });
    await Plants.write(plantJson, plants);
    return newPlant;
  }

  async editPlant(plantId: string, newPlant: IPlant) {
    const plants: IPlant[] = await Plants.read(plantJson);

    const plantById = plants.find((plant) => plant.id === plantId);

    if (!plantById) return null;

    const updatedPlants = plants.map((plant) => (
      plant.id === plantId ? newPlant : plant));

    await Plants.write(plantJson, updatedPlants);
    return newPlant;
  }

  async getPlantsThatNeedsSunWithId(id: string) {
    const plants: IPlant[] = await Plants.read(plantJson);

    const filteredPlants = plants.filter(plantsNeedSun(id));

    return filteredPlants;
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

  private static async read(file: string) {
    return JSON.parse(await fs.readFile(file, { encoding: 'utf8' }));
  }

  private static async write(file: string, data: IPlant[] | IOpsInfo): Promise<void> {
    return (fs.writeFile(file, JSON.stringify(data)));
  }
}

export default Plants;
