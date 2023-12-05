import { Response, Request } from "express";

export default class AuthBusiness {
  public getRequest = (req: Request, res: Response) => {
    res.status(200).json({ message: "Get request successfull" });
  };
  postRequest = (req: Request, res: Response) => {
    res.status(200).json({ message: "Post request successfull" });
  };
}
