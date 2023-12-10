import { Router } from "express";
import express from "express";
import BookingService from "./booking.service";
import {
  validateRequestBody,
  validateRequestParams,
} from "../../@guard/validation.guard";
import { bookingSchema } from "./dto/booking.dto";

const router: Router = express();

const bookingService = new BookingService();

router.post(
  "/bookings",
  bookingService.createBooking
  // validateRequestBody(bookingSchema),
);
router.get("/bookings/:bookingId", bookingService.getBookingDetails);
// validateRequestParams(bookingSchema),

export default router;
