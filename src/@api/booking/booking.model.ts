import { Schema, model } from "mongoose";
import { BookingType } from "./dto/booking.dto";

const bookingSchema: Schema<BookingType> = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "users" },
    numSeats: { type: Schema.Types.Number, required: true },
    showtimeId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "showtimes",
    },
    totalPrice: { type: Schema.Types.Number },
  },
  { timestamps: true }
);

export const BookingModel = model<BookingType>("bookings", bookingSchema);
