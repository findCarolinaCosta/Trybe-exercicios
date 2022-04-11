import 'express-async-errors';
import express, { Request, Response } from 'express';
import PlantController from './src/controllers/Plant';
import PlantModel from './src/models/Plant';
import { IError } from './src/interface/interfaces';

const app = express();
const plantController = new PlantController(new PlantModel());

app.use(express.json());

app.get('/plants', plantController.getPlants);

app.get('/plants/:id', plantController.getPlantById);

app.delete('/plants/:id', plantController.removePlantById);

app.put('/plant/:id', plantController.editPlant);

app.post('/plant', plantController.savePlant);

app.get('/sunny/:id', plantController.getPlantsThatNeedsSunWithId);

app.use((err: IError, _req: Request, res: Response) => {
   console.log(err);
  return res.status(500).json({ error: err.message });
});

const PORT = 3030;

app.listen(PORT, () => {
  console.log(`Up port: ${PORT}`);
});