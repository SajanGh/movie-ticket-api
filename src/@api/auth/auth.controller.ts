import { Router, Express, Response, Request, Application } from "express";
import express from "express";
const router: Router = express.Router();
const app: Express = express();
console.log("running auth");

export default class AuthController {
  public getRequest = (req: Request, res: Response) => {
    res.status(200).json({ message: "Get request successfull" });
  };
  postRequest = (req: Request, res: Response) => {
    res.status(200).json({ message: "Post request successfull" });
  };
}
