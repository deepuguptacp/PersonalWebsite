const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    degree: {
      type: String,
    },
    organization: {
      type: String,
    },
    date: {
      type: String,
    },
    cgpa: {
      type: String,
    },
    branch: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  { timestamps: true }
);

const Education = mongoose.model("education", educationSchema);
module.exports = Education;
