import { MovieController } from "../controllers/MovieController";
import { Router } from "express";

const movieController = new MovieController();
export const routes = Router();

routes.get("/movies", movieController.getMovies);
