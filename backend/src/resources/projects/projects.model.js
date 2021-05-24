const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    websiteLink: {
      type: String,
    },
    githubLink: {
      type: String,
    },
    startingdate: {
      type: Date,
    },
    endingdate: {
      type: Date,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Projects = mongoose.model("project", projectSchema);
module.exports = Projects;
