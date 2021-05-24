const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String
    }
  },
  { timestamps: true }
)


const Skills = mongoose.model('skill', skillSchema)
module.exports = Skills