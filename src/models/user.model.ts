import { model, Schema } from "mongoose";

import { RoleEnum } from "../enums/role.enum";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      enum: RoleEnum,
      required: true,
      type: String,
      default: RoleEnum.USER,
    },
    isDeleted: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true, versionKey: false },
);

export const User = model<IUser>("user", userSchema);
