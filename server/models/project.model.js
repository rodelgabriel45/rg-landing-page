import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: "String",
      required: true,
    },
    description: {
      type: "String",
      required: true,
    },
    link: {
      type: "String",
      required: true,
    },
    technologies: [
      {
        type: String,
      },
    ],
    features: [
      {
        type: String,
      },
    ],
    cardImg: {
      type: "String",
      required: true,
    },
    featureImg: {
      type: "String",
      required: true,
    },
    featureDescription: {
      type: "String",
      required: true,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
