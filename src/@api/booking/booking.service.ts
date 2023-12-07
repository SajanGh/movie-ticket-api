import { Request, Response } from "express";
import { ShowtimeModel } from "../showtime/showtime.model";
import { BookingModel } from "./booking.model";

export default class BookingService {
  createBooking = async (req: Request, res: Response) => {
    try {
      const { showtimeId, numSeats } = req.body;
      const showtime = await ShowtimeModel.findById(showtimeId);

      if (!showtime || showtime.seatsBooked + numSeats > showtime.totalSeats) {
        return res.status(400).json({ message: "Not enough seats available" });
      }

      showtime.seatsBooked += numSeats;
      await showtime.save();

      const newBooking = new BookingModel(req.body);
      await newBooking.save();

      res
        .status(201)
        .json({ message: "Booking successful", booking: newBooking });
    } catch (err) {
      res.status(500).json({ message: "Error creating booking" });
    }
  };
}
