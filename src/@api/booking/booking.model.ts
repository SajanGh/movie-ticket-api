import { Schema, model } from "mongoose";
import { BookingType } from "./dto/booking.dto";

const bookingSchema: Schema<BookingType> = new Schema(
  {
    userId: {},
    movieId: {},
    numTickets: {},
    //date format
    showTime: {},
    bookingDate: {},
  },
  { timestamps: true }
);

export const BookingModel = model<BookingType>("bookings", bookingSchema);
