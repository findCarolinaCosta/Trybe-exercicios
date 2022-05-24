import { Schema, model as createModel, Document } from "mongoose";
import IFrame from "../interfaces/IFrame";
import { MongoModel } from "./MongoModel";

interface FrameDocument extends IFrame, Document {}

const frameSchema = new Schema<FrameDocument>({
  material: String,
  color: String,
});

export class FrameModel extends MongoModel<IFrame> {
  constructor(model = createModel("Armacoes", frameSchema)) {
    super(model);
  }
}
