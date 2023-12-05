import jwt from "jsonwebtoken";
import { Request as ExpressRequest, NextFunction, Response } from "express";
import { SECRET_KEY } from "../@config/config";
interface RequestWithUserId extends ExpressRequest {
  userId?: string;
}

export class Authentication {
  authentication = (
    req: RequestWithUserId,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized:No token provided",
        });
      }
      const decoded = jwt.verify(token, SECRET_KEY) as { userId: string };
      req.userId = decoded.userId;
      next();
    } catch (err) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: Invalid User" });
    }
  };
}
