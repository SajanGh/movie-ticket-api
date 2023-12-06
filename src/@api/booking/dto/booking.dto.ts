import z from "zod";

export const bookingSchema = z.object({
  userId: z.number(),
  movieId: z.number(),
  numTickets: z.number(),
  showTime: z.array(z.date()),
  bookingDate: z.date(),
});

export type BookingType = z.infer<typeof bookingSchema>;
