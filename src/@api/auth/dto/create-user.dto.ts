import z from "zod";
import { ObjectId } from "mongoose";
const passwordRegex =
  /^(?=.*[A-Z])[A-Za-z0-9!@#$%^&*()_+\-=[\]{};:'\\"|,.<>/?]{8,}$/;

const emailRegex =
  /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;

export const UserSchema = z.object({
  username: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  address: z.string().optional(),
  email: z
    .string()
    .email()
    .refine((value) => emailRegex.test(value), {
      message: "Please provide valid email",
    }),
  password: z
    .string()
    .min(8)
    .max(100)
    .nonempty()
    .refine((value) => passwordRegex.test(value), {
      message:
        "Please provide  minimum of eight characters, including at least one uppercase letter, one lowercase letter, one number, and one special character and space is not allwed",
    }),
});

export type UserType = z.infer<typeof UserSchema>;
