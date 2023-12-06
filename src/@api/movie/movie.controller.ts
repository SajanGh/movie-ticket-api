import { Router } from "express";
import express from "express";
import MovieService from "./movie.service";
import {
  validateRequestBody,
  validateRequestParams,
} from "../../@guard/validation.guard";
import { movieSchema } from "./dto/movies.dto";
import { paramsValidationSchema } from "./dto/params.dto";

const router: Router = express.Router();
const movieCtrl = new MovieService();

router.get("/movies-list", movieCtrl.moviesList);
// validateRequestBody(movieSchema),

router.get(
  "/movie/:id",
  validateRequestParams(paramsValidationSchema),
  movieCtrl.getMovie
);

export default router;
