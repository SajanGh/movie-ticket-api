import { Request, Response } from "express";
import { ShowtimeModel } from "./showtime.model";

export default class ShowtimService {
  addShowTime = async (req: Request, res: Response) => {
    try {
      const newShowtime = new ShowtimeModel(req.body);
      await newShowtime.save();
      return res
        .status(201)
        .json({ message: "Showtime added", ShowTime: newShowtime });
    } catch (error) {
      return res.status(500).json({ message: "Error adding showtime" });
    }
  };

  getShowTimesForMovie = async (req: Request, res: Response) => {
    try {
      const movieId = req.params.id;
      const showtimes = await ShowtimeModel.find({ movieId: movieId });
      if (showtimes && showtimes.length > 0) {
        res.status(200).json({ message: "Showtimes", showtimes: showtimes });
      } else {
        res.status(404).json({ message: "No showtimes found for this movie" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error retrieving showtimes" });
    }
  };
}
