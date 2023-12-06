import z from "zod";

export const movieSchema = z.object({
  title: z.string(),
  description: z.string(),
  releaseDate: z.string(),
  duration: z.number(),
  genre: z.array(z.string()),
  posterURL: z.string(),

  // title: z.string().optional(),
  // description: z.string().optional(),
  // releaseDate: z.string().optional(),
  // duration: z.number().optional(),
  // genre: z.array(z.string()).optional(),
  // posterURL: z.string().optional(),
});

export type MovieType = z.infer<typeof movieSchema>;
