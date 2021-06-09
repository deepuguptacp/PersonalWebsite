const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    websiteLink: {
      type: String,
    },
    githubLink: {
      type: String,
    },
    startingdate: {
      type: String,
    },
    endingdate: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Projects = mongoose.model("project", projectSchema);
module.exports = Projects;
