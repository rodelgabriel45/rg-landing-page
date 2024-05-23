import express from "express";
import {
  deleteMessage,
  getMessages,
  sendMessage,
} from "../controllers/message.controller.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/sendMessage", sendMessage);
router.get("/getMessages", verifyUser, getMessages);
router.delete("/delete/:id", verifyUser, deleteMessage);

export default router;
