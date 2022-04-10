import express from 'express';
import { IPlant } from './src/interface';
import Plants from './src/Plants';

const app = express();
const notFoundMessage = 'Plant not found';

app.use(express.json());

app.get('/plants', async (_req, res) => {
  const plants = await (new Plants().getPlants());

  return res.status(200).json(plants);
});

app.get('/plants/:id', async (req, res) => {
  const { id } = req.params;
  const plant: IPlant | null = await (new Plants().getPlantById(id));

  if (!plant) return res.status(404).json({ message: notFoundMessage });

  return res.status(200).json(plant);
});

app.delete('/plants/:id', async (req, res) => {
  const { id } = req.params;
  const plant: IPlant | null = await (new Plants().removePlantById(id));

  if (!plant) return res.status(404).json({ message: notFoundMessage });

  return res.status(204).end();
});

app.put('/plant/:id', async (req, res) => {
  const { id } = req.params;
  const newPlant = req.body;
  const plant = await (new Plants().editPlant(id, newPlant));

  if (!plant) return res.status(404).json({ message: notFoundMessage });

  return res.status(200).json(plant);
});

app.post('/plant', async (req, res) => {
  const newPlant = req.body;

  const plant: IPlant = await (new Plants().savePlant(newPlant));
  return res.status(201).json(plant);
});

app.get('/sunny/:id', async (req, res) => {
  const { id } = req.params;
  const plant = await (new Plants().getPlantsThatNeedsSunWithId(id));
  return res.status(200).json(plant);
});

const PORT = 3030;

app.listen(PORT, () => {
  console.log(`Up port: ${PORT}`);
});