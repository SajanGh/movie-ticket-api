import z from "zod";

export const movieSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  releaseDate: z.date(),
  duration: z.number(),
  genre: z.array(z.string()),
  posterURL: z.string(),
});

export type MovieType = z.infer<typeof movieSchema>;
