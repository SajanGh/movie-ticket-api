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
const movieService = new MovieService();

router.get(
  "/movies",

  validateRequestBody(movieSchema),
  movieService.moviesList
);

router.get(
  "/movies/:id",
  validateRequestParams(paramsValidationSchema),
  movieService.getMovie
);
router.post("/movies", movieService.addMovie);
router.put("/movies/:id", movieService.updateMovie);
router.delete("/movies/:id", movieService.deleteMovie);

export default router;
