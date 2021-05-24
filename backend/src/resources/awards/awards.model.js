const mongoose = require('mongoose')

const awardSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    organization: {
      type: String
    },
    date: Date,
    description: {
      type: String
    }
  },
  { timestamps: true }
)


const Awards = mongoose.model('award', awardSchema)
module.exports = Awards