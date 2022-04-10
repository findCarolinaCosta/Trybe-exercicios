import { IPlant } from '../interface';

const plantsNeedSun = (id: string) => (plant: IPlant) => {
  const needsSunById = (plant.needsSun === true) && plant.id === id;
  const specialCare = plant.specialCare === undefined || plant.specialCare.waterFrequency > 2;

  return (needsSunById && specialCare);
};

export default plantsNeedSun;
