import { ZodError } from "zod";
import { IModel } from "../models";

export interface ServiceError {
  error: ZodError;
}

export abstract class Service<T> {
  constructor(protected model: IModel<T>) {}

  public async create(obj: T): Promise<T | null | ServiceError> {
    return this.model.create(obj);
  }

  public async read(): Promise<T[]> {
    return this.model.read();
  }

  public async readOne(id: string): Promise<T | null | ServiceError> {
    return this.model.readOne(id);
  }
}
