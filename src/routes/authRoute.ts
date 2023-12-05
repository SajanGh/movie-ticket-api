import { Router, Express, Request, Response, Application } from "express";
import express from "express";
const router: Router = express.Router();

import authController from "../@api/auth/auth.controller";
router.use("/api", authController);

export default router;
