import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/sendMessage", sendMessage);
router.get("/getMessages", verifyUser, getMessages);

export default router;
