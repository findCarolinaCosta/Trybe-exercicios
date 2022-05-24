import { Schema, model as createModel, Document } from "mongoose";
import ILens from "../interfaces/ILens";
import { MongoModel } from "./MongoModel";

interface LensDocument extends ILens, Document {}

const lensSchema = new Schema<LensDocument>({
  degree: Number,
  antiGlare: Boolean,
  blueLightFilter: Boolean,
});

export class LensModel extends MongoModel<ILens> {
  constructor(model = createModel("Lenses", lensSchema)) {
    super(model);
  }
}
