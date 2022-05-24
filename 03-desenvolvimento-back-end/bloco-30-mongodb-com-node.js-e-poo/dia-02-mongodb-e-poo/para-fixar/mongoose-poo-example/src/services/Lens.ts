import ILens, { lensSchema } from "../interfaces/ILens";
import { Service, ServiceError } from ".";
import { LensModel } from "../models/Lens";

class LensService extends Service<ILens> {
  constructor(model = new LensModel()) {
    super(model);
  }

  create = async (obj: ILens): Promise<ILens | ServiceError | null> => {
    const parsed = lensSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  };
}

export default LensService;
