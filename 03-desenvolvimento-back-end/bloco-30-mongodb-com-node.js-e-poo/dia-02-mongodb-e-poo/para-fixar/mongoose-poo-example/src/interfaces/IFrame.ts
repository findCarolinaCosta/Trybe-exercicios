import { z } from "zod";

//zod para definir as tipagens e se responsabilizar pela validação dos dados na camada de Service
const FrameSchema = z.object({
  material: z.string(),
  color: z
    .string({
      required_error: "Color is required",
      invalid_type_error: "Color must be a string",
    })
    .min(3, { message: "Color must be 3 or more characters long" }),
});

type IFrame = z.infer<typeof FrameSchema>;

export default IFrame;
export { FrameSchema };
