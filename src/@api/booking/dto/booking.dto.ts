import z from "zod";
import { ObjectId } from "mongodb";
export const bookingSchema = z.object({
  userId: z.instanceof(ObjectId),
  numSeats: z.number(),
  showTimeId: z.instanceof(ObjectId),
  totalPrice: z.number(),
  bookingDate: z.date().optional(),
});

export type BookingType = z.infer<typeof bookingSchema>;
