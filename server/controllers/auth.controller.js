import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const register = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (user) return next(errorHandler(400, "User Already exist!"));

    if (!username || !password)
      return next(errorHandler(400, "All fields are required."));
    if (username.length < 6)
      return next(errorHandler(400, "Username must be atleast 6 characters."));
    if (password.length < 7)
      return next(errorHandler(400, "Password must be atleast 7 characters."));

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();
    const { password: pass, ...rest } = newUser._doc;

    res.status(201).json(rest);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) return next(errorHandler(404, "Invalid user credentials"));

    const validPassword = bcryptjs.compareSync(password, user.password);

    if (!validPassword)
      return next(errorHandler(400, "Invalid user credentials"));

    const { password: pass, ...rest } = user._doc;

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("User has been logged out.");
  } catch (error) {
    next(error);
  }
};
