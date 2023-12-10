import { ObjectId } from "mongodb";
import { type } from "os";
import z from "zod";

export const showtimeSchema = z.object({
  _id: z.string(),
  movieId: z.instanceof(ObjectId),
  startTime: z.date(),
  totalSeats: z.number(),
  seatsBooked: z.number(),
  totalPrice: z.number(),
});

export type ShowtimeType = z.infer<typeof showtimeSchema>;
