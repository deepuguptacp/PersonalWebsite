const mongoose = require('mongoose')

const aboutSchema = new mongoose.Schema(
  {
    description: {
      type: String,
    }
  },
  { timestamps: true }
)


const About_section = mongoose.model('about_section', aboutSchema)
module.exports = About_section