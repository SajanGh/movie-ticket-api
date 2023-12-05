import { Request, Response } from "express";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../../@config/config";
import asyncHandler from "../../@middleware/asyncHandler";
import { User } from "./auth.model";
export class AuthService {
  // Login
  login = asyncHandler(async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email, password });
      if (!user) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid credentials" });
      }

      const hashPassword = await argon2.hash("password");
      user.password = hashPassword;

      const verifyPassword = await argon2.verify(hashPassword, "password");
      if (!verifyPassword) {
        res
          .status(401)
          .json({ success: false, message: "Invalid credentials" });
      }

      const token = jwt.sign({ userId: user._id }, SECRET_KEY);
      return res
        .status(200)
        .json({ success: true, data: user, jwt_token: token });
    } catch (err) {
      return res.status(500).json({ message: "Login failed", success: false });
    }
  });
  // Registration
  register = asyncHandler(async (req: Request, res: Response) => {
    const { username, firstName, lastName, email, password } = req.body;

    if (!username || !firstName || !lastName || !email || !password) {
      return res.status(401).json({
        success: false,
        message: "Inalvid input data!:",
      });
    }
    try {
      const checkUser = await User.findOne({ email });
      if (checkUser) {
        return res
          .status(400)
          .json({ success: false, message: "User already exists!" });
      }
      const user = new User({ username, firstName, lastName, email, password });
      await user.save();
      return res.status(201).json({
        message: "Registration Successfull",
        success: true,
        userId: user._id,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Registration failed", success: false });
    }
  });
}