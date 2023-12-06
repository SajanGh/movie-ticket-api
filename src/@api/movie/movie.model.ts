import { Schema, model } from "mongoose";
import { MovieType } from "./dto/movies.dto";

const movieSchema: Schema<MovieType> = new Schema(
  {
    title: {
      type: Schema.Types.String,
      required: true,
      trim: true,
    },
    description: { type: Schema.Types.String, trim: true },
    releaseDate: { type: Schema.Types.String, trim: true },
    duration: { type: Schema.Types.Number, min: 1 },
    genre: { type: [Schema.Types.String] },
    posterURL: { type: Schema.Types.String, trim: true },
  },
  { timestamps: true }
);

export const MovieModel = model<MovieType>("movies", movieSchema);
