import mongoose from "mongoose";
import { z } from "zod";

export const paramsValidationSchema = z.object({
  id: z.string().refine((val) => {
    return mongoose.Types.ObjectId.isValid(val);
  }),
});
