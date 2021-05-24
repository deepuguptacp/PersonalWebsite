const mongoose = require('mongoose')

const experienceSchema = new mongoose.Schema(
  {
    designation: {
      type: String
    },
    organization: {
      type: String
    },
    startingdate: Date,
    endingdate: Date,
    description: {
      type: String
    },
    location: {
      type: String
    }
  },
  { timestamps: true }
)


const Experience = mongoose.model('experience', experienceSchema)
module.exports = Experience