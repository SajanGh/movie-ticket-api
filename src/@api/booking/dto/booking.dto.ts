import z from "zod";
import { ObjectId } from "mongodb";
export const bookingSchema = z.object({
  userId: z.instanceof(ObjectId),
  numSeats: z.number(),
  showtimeId: z.instanceof(ObjectId),
  totalPrice: z.number(),
});

export type BookingType = z.infer<typeof bookingSchema>;
