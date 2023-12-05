import { Schema, model, Document } from "mongoose";

import { UserType } from "./dto/create-user.dto";

const userSchema: Schema<UserType> = new Schema(
  {
    username: {
      type: Schema.Types.String,
      required: true,
      trim: true,
      maxLength: 20,
    },
    email: {
      type: Schema.Types.String,
      required: true,
      maxLength: 100,
    },
    password: {
      type: Schema.Types.String,
      required: true,
      select: false,
      maxLength: 100,
    },
    firstName: { type: Schema.Types.String, maxlength: 20, minLength: 3 },
    lastName: { type: Schema.Types.String, maxLength: 20, minlength: 3 },
    address: { type: Schema.Types.String },
  },
  { timestamps: true }
);

export const User = model<UserType>("users", userSchema);
