import { model, Schema } from "mongoose";
import { handleMongooseError } from "../helpers/handleMongooseError.js";

const enumValue = ["starter", "pro", "business"];
const emailRegexp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      math: emailRegexp,
      unique: true,
    },
    subscription: {
      type: String,
      enum: enumValue,
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

export const User = model("user", userSchema);
