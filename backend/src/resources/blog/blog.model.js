const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    date: Date,
    description: {
      type: String
    }
  },
  { timestamps: true }
)


const Blogs = mongoose.model('blog', blogSchema)
module.exports = Blogs