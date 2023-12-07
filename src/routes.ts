import { Router, Express, Request, Response, Application } from "express";
import express from "express";
import authController from "./@api/auth/auth.controller";
import movieController from "./@api/movie/movie.controller";
import bookingController from "./@api/booking/booking.controller";
import showtimeController from "./@api/showtime/showtime.controller";
const router: Router = express.Router();

router.use("/api/v1", authController);
router.use("/api/v1", movieController);
router.use("/api/v1", showtimeController);
router.use("/api/v1", bookingController);

export default router;
