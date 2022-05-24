import IFrame, { FrameSchema } from "../interfaces/IFrame";
import { ServiceError, Service } from ".";
import { FrameModel } from "../models/Frame";

export class FrameService extends Service<IFrame> {
  constructor(model = new FrameModel()) {
    super(model);
  }

  create = async (obj: IFrame): Promise<IFrame | ServiceError | null> => {
    const parsed = FrameSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  };
}
