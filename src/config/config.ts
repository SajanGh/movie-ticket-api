import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const DB = process.env.MONGO_URI;
export const SECRET = process.env.SECRET_KEY || "";
