import express from "express";
import { verifyUser } from "../utils/verifyUser.js";
import {
  addProject,
  getAllProjects,
} from "../controllers/project.controller.js";

const router = express.Router();

router.post("/add", verifyUser, addProject);
router.get("/", getAllProjects);

export default router;
