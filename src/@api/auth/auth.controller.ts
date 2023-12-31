import { Router } from "express";
import express from "express";
import { AuthService } from "./auth.service";
import { Authentication } from "../../@middleware/authentication.service";
import { validateRequestBody } from "../../@guard/validation.guard";
import { loginSchema } from "./dto/login.dto";
import { userSchema } from "./dto/create-user.dto";

const router: Router = express.Router();

const authService = new AuthService();
const authToken = new Authentication();

router.post("/signup", validateRequestBody(userSchema), authService.register);
router.post(
  "/login",
  validateRequestBody(loginSchema),
  authService.login
  );
  // authToken.authentication,
export default router;
