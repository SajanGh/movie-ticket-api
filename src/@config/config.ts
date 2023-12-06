import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const DB = process.env.MONGO_URI;
export const SECRET_KEY = process.env.JWT_SECRET || "";
