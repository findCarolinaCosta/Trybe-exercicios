import { IMovie } from "./../schemas/MovieSchema";
import { MovieModel } from "./../models/MovieModel";

export class MovieService {
  constructor(private movieModel = new MovieModel()) {}

  public async getMovies(): Promise<IMovie[]> {
    return this.movieModel.getMovies();
  }
}
