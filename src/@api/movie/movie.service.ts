import express, { Request, Response, NextFunction } from "express";
import asyncHandler from "../../@middleware/asyncHandler";
import { MovieModel } from "./movie.model";

export default class MovieService {
  moviesList = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const movies = await MovieModel.find({});
        if (movies) {
          return res
            .status(200)
            .json({ message: "List of Movies", Movies: movies });
        } else {
          return res.status(404).json({ message: "Movie not found" });
        }
      } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
      }
    }
  );

  getMovie = async (req: Request, res: Response) => {
    try {
      const movieId = req.params.id;
      const movie = await MovieModel.findById(movieId);
      if (movie) {
        return res.status(200).json({ message: "Movie", Movies: movie });
      }
    } catch (err) {
      return res.status(404).json({ message: "Movie not found" });
    }
  };
}
