import { Router } from "express";
import express from "express";
import postRequest from "./auth.business";
const router: Router = express.Router();

const signupCtrl = new postRequest();

router.post("/signup", signupCtrl.postRequest);

export default router;
