import z from "zod";

export const movieSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional().optional(),
  releaseDate: z.date().optional(),
  duration: z.number().optional(),
  genre: z.array(z.string()).optional(),
  posterURL: z.string().optional(),
});

export type MovieType = z.infer<typeof movieSchema>;
