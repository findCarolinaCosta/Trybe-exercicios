import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';
import { IOpsInfo, IPlant } from '../src/interface';

const prisma = new PrismaClient();

const read = async (file: string) => JSON.parse(await fs.readFile(file, { encoding: 'utf8' }));

const seedIt = async () => {
  const plants: IPlant[] = await read('plants.json');
  const opsInfo: IOpsInfo = await read('opsInfo.json');
  await prisma.ops_info.create({ data: { createdPlants: opsInfo.createdPlants } });
   Promise.all(plants.map(async (plant) => {
    const care = await prisma.special_care.create({
      data: { waterFrequency: plant.specialCare?.waterFrequency },
    });
    await prisma.plant.create({
      data: {
        breed: plant.breed,
        size: plant.size,
        needsSun: plant.needsSun,
        origin: plant.origin,
        specialCareId: care.id,
      },
    });
  }));
};

seedIt().catch((e) => {
  console.log(e);
  process.exit(1);
}).finally(() => {
  prisma.$disconnect();
});