import { z } from "zod";

const lensSchema = z.object({
  degree: z.number(),
  antiGlare: z.boolean(),
  blueLightFilter: z.boolean(),
});

type ILens = z.infer<typeof lensSchema>;

export default ILens;
export { lensSchema };
