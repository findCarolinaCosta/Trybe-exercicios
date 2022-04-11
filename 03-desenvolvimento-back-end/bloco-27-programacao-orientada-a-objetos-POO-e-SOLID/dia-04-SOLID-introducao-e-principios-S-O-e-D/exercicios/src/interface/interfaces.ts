export interface IPlant {
  id: string;
  breed: string;
  size: number;
  needsSun: boolean;
  origin: string;
  specialCareId?: string | null;
  specialCare: {
    waterFrequency: number | null;
  } | null;
}

export interface ISpecialCare {
  specialCare: {
    waterFrequency: number;
  };
}

export interface IOpsInfo {
  id?: string;
  createdPlants: number;
}

export interface IPlanModel {
  getPlants(): Promise<IPlant[]>;
  getPlantById(id: string): Promise<IPlant | null>;
  removePlantById(id: string): Promise<IPlant | null>;
  savePlant(plant: IPlant): Promise<IPlant>;
  editPlant(plantId: string, newPlant: IPlant): Promise<IPlant | null>;
  getPlantsThatNeedsSunWithId(id: string): Promise<IPlant[]>;
}

export interface IError extends Error {
  status: number;
  message: string;
}
