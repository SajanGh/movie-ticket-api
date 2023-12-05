import mongoose from "mongoose";

import { DB } from "../config/config";

export const DB_URI = DB;
if (DB_URI) {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(DB_URI)
    .then(() => {
      console.log("Mongoose Connection Successfull!");
    })
    .catch((e) => {
      console.log("Mongoose Connection Errror");
      console.log(e);
    });

  mongoose.connection.on("connected", () => {
    console.log("Mongoose default connection running...");
  });

  mongoose.connection.on("error", (e) => {
    console.log("Mongoose default connection error:" + DB_URI);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose default connection disocnnected");
  });

  process.on("SIGNINT", () => {
    // @ts-ignore
    mongoose.connection.close(() => {
      console.log("Mongoose connection disconnected through temrination");
      process.exit(0);
    });
  });
}
