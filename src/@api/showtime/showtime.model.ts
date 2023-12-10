import { Schema, model } from "mongoose";
import { ShowtimeType } from "./dot/showtime.dto";

const showtimeSchema: Schema = new Schema({
  movieId: { type: Schema.Types.ObjectId, ref: "movies" },
  startTime: { type: Schema.Types.Date, required: true },
  totalSeats: { type: Schema.Types.Number, required: true },
  seatsBooked: { type: Number, default: 0 },
});

export const ShowtimeModel = model<ShowtimeType>("showtimes", showtimeSchema);
