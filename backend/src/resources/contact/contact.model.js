const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema(
  {
    gmail: {
      type: String
    },
    linkedln: {
      type: String
    },
    github: {
      type: String
    }
  },
  { timestamps: true }
)


const Contacts = mongoose.model('contact', contactSchema)
module.exports = Contacts