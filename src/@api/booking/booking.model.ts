import { Schema, model } from "mongoose";
import { BookingType } from "./dto/booking.dto";

const bookingSchema: Schema<BookingType> = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "UserModel" },

    numSeats: { type: Schema.Types.Number, required: true },

    showTimeId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "ShowtimeModel",
    },
    totalPrice: { type: Schema.Types.Number, required: true },
    bookingDate: { type: Schema.Types.Date },
  },
  { timestamps: true }
);

export const BookingModel = model<BookingType>("bookings", bookingSchema);
