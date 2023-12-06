import { Router } from "express";
import express from "express";
import BookingService from "./booking.service";

const router: Router = express();

const bookingCtrl = new BookingService();

router.post("/book-ticket", bookingCtrl.ticketBooking);

export default router;
