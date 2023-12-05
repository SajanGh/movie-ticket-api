import { Router, Express, Request, Response, Application } from "express";
import express from "express";
const router: Router = express.Router();

console.log("this is running first");
const app: Express = express();

router.get("/test", (req: Request, res: Response) => {
  res.status(200).json({ message: "Get request successfull" });
});
router.post("/test", (req: Request, res: Response) => {
  res.status(200).json({ message: "Post request successfull" });
});

export default router;
