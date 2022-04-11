import { IPlant } from '../interface/interfaces';

const plantsNeedSun = (id: string) => (plant: IPlant) => {
  const needsSunById = plant.needsSun && plant.id === id;
  const specialCare = !plant.specialCare || (plant.specialCare.waterFrequency as number) > 2;

  return needsSunById && specialCare;
};

export default plantsNeedSun;
