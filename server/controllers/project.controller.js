import { v2 as cloudinary } from "cloudinary";

import { errorHandler } from "../utils/error.js";
import Project from "../models/project.model.js";

export const addProject = async (req, res, next) => {
  try {
    const {
      title,
      description,
      link,
      technologies,
      features,
      featureDescription,
    } = req.body;
    let { cardImg, featureImg } = req.body;

    if (!req.user.isAdmin)
      return next(errorHandler(403, "Unauthorized to do this action."));

    if (
      !title ||
      !description ||
      !link ||
      !technologies ||
      !features ||
      !cardImg ||
      !featureImg ||
      !featureDescription
    )
      return next(errorHandler(400, "All fields are required"));

    const uploadedCardImg = await cloudinary.uploader.upload(cardImg);
    cardImg = uploadedCardImg.url;

    const uploadedFeatureImg = await cloudinary.uploader.upload(featureImg);
    featureImg = uploadedFeatureImg.url;

    const newProject = new Project({
      title,
      description,
      link,
      technologies,
      features,
      cardImg,
      featureImg,
      featureDescription,
    });

    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    next(error);
  }
};

export const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();

    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};
