import bodyParser from "body-parser";
import express from "express";
import routes from "./routes/routes";

import { Application } from "express-serve-static-core";
import "./database/database";

class Main {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config(this.app);

    this.app.use(routes);
    console.log("third");
  }
  private config(app: Application): void {
    //support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencode post false
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new Main().app;
