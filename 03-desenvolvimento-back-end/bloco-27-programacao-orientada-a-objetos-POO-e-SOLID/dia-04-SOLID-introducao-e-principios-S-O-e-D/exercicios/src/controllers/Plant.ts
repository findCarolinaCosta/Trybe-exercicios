import { Request, Response } from 'express';
import { IPlanModel } from '../interface/interfaces';

class Plant {
  private model: IPlanModel;

  constructor(Model: IPlanModel) {
    this.model = Model;
  }

  public getPlants = async (_req: Request, res: Response) => {
   const plants = await this.model.getPlants();

   return res.status(200).json(plants);
  }

  public getPlantById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const plant = await this.model.getPlantById(id);

    return res.status(200).json(plant);
  }

  public removePlantById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const plant = await this.model.removePlantById(id);

    if (!plant) return res.status(404).json({ error: 'Plant not found' });

    return res.status(204).end();
  }

  public savePlant = async (req: Request, res: Response) => {
    const plant = req.body;
    const newPlant = await this.model.savePlant(plant);

    return res.status(201).json(newPlant);
  }

  public editPlant = async (req: Request, res: Response) => {
    const { id } = req.params;
    const plan = req.body;
    const plantEdited = await this.model.editPlant(id, plan);

    if (!plantEdited) return res.status(404).json({ error: 'Plant not found' });

    return res.status(200).json(plantEdited);
  }

  public getPlantsThatNeedsSunWithId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const plants = await this.model.getPlantsThatNeedsSunWithId(id);

    return res.status(200).json(plants);
  }
}

export default Plant;
