export interface IPlant {
  id: string,
  breed: string,
  size: number,
  needsSun: boolean,
  origin: string,
  specialCare: {
    waterFrequency: number,
  }
}

export interface IOpsInfo { createdPlants: number }
