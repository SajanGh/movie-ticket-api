import { Router, Express, Request, Response, Application } from "express";
import express from "express";
import authController from "./@api/auth/auth.controller";

const router: Router = express.Router();
router.use("/api/v1", authController);

export default router;
