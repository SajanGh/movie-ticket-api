import { Application, Request, Response } from "express";

export class CommonRoute {
  public route(app: Application) {
    app.all("*", (req: Request, res: Response) => {
      res.status(401).send({ error: true, message: "Check you URL please" });
    });
  }
}
