import { Router } from "express";

import express from "express";
import ShowtimService from "./showtime.service";
import {
  validateRequestBody,
  validateRequestParams,
} from "../../@guard/validation.guard";
import { paramsValidationSchema } from "../movie/dto/params.dto";
import { showtimeSchema } from "./dot/showtime.dto";

const router: Router = express();

const showtimeService = new ShowtimService();

router.post("/showtimes", showtimeService.addShowTime);
router.get(
  "/showtimes/:id",
  [validateRequestParams(paramsValidationSchema)],
  showtimeService.getShowTimesForMovie
  // validateRequestBody(showtimeSchema),
);

export default router;
