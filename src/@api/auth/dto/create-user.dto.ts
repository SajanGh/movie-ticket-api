import z from "zod";

const passwordRegex =
  /^(?=.*[A-Z])[A-Za-z0-9!@#$%^&*()_+\-=[\]{};:'\\"|,.<>/?]{8,}$/;

export const userSchema = z.object({
  username: z.string(),
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20),
  address: z.string().optional(),
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .max(100)
    .nonempty()
    .refine((value) => passwordRegex.test(value), {
      message:
        "Please provide  minimum of eight characters, including at least one uppercase letter, one lowercase letter, one number, and one special character and space is not allowed",
    }),
});

export type UserType = z.infer<typeof userSchema>;
