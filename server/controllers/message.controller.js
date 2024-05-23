import validator from "email-validator";

import { errorHandler } from "../utils/error.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res, next) => {
  try {
    const { email, message } = req.body;

    if (!email || !message || email === "" || message === "")
      return next(errorHandler(400, "Please fill all required fields."));

    if (message.length < 10)
      return next(errorHandler(400, "Message must be atleast 10 characters."));

    const validEmail = validator.validate(email);
    if (!validEmail)
      return next(errorHandler(400, "Please enter a valid email."));

    const newMessage = await Message.create({
      email,
      message,
    });

    await newMessage.save();

    res.status(201).json("Message successfully sent!");
  } catch (error) {
    next(error);
  }
};

export const getMessages = async (req, res, next) => {
  try {
    const userAdmin = req.user.isAdmin;

    if (!userAdmin)
      return next(errorHandler(401, "Unauthorized to view messages."));

    const messages = await Message.find();

    res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
};

export const deleteMessage = async (req, res, next) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) return next(errorHandler(404, "Message not found!"));

    if (!req.user.isAdmin)
      return next(errorHandler(401, "Unauthorized to delete messages."));

    await Message.findByIdAndDelete(req.params.id);

    res.status(200).json("Message successfully deleted.");
  } catch (error) {
    next(error);
  }
};
