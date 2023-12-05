import { Application, Request, Response, Router } from "express";
import authRoute from "./authRoute";
import express from "express";
const router: Router = express.Router();
console.log("second");
const app = express();

router.use("/api", authRoute);

export default router;
