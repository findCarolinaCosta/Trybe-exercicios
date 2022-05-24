import { Model, Document } from "mongoose";
import { IModel } from ".";

export abstract class MongoModel<T> implements IModel<T> {
  constructor(protected model: Model<T & Document>) {}

  create = async (obj: T): Promise<T> => this.model.create({ ...obj });

  read = async (): Promise<T[]> => this.model.find();

  readOne = async (id: string): Promise<T | null> =>
    this.model.findOne({ _id: id });
}
