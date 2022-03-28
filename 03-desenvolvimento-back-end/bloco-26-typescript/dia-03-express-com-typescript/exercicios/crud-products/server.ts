import express, { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';
import { config } from 'dotenv';
import productRoutes from './src/routes/productRoutes';

config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get('/', (_req, res) => {
    return res.status(StatusCodes.OK).send('OK');
});

//rotas
app.use(productRoutes)

app.use((err: Error , _req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(err.name ? `name: ${name}` : err);

  switch(name) {
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflitError':
      res.status(409).json({ message });
      break;
    case 'NotAcceptableError':
      res.status(StatusCodes.CONFLICT).json({ message});
      break;
    default: {
      console.error(err);
      res.sendStatus(500);
      break;
    }
  }

  next();
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});