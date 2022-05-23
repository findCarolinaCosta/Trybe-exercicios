import { MovieService } from "./../services/MovieService";
import { Request, Response } from "express";

export class MovieController {
  constructor(private movieService = new MovieService()) {}

  notFound = "Movie not found";

  internalError = "Internal server error";

  public getMovies = async (
    _req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const movies = await this.movieService.getMovies();

      return res.status(200).send(movies);
    } catch (err: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  };
}
