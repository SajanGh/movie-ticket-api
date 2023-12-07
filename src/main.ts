import bodyParser from "body-parser";
import express from "express";

import routes from "./routes";
import { Application } from "express-serve-static-core";
import cors from "cors";
import "./@config/db.config";
import { corsUrl } from "./@config/config";

class Main {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config(this.app);

    this.app.use(routes);
  }
  private config(app: Application): void {
    this.app.use(
      cors({ origin: corsUrl, optionsSuccessStatus: 200, credentials: true })
    );
    //support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencode post false
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new Main().app;
