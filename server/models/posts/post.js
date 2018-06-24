const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: String,
  text: String,
  author: String,
  claps: Number,
}, {
  timestamps: true,
  collection: 'posts'
})

schema.statics.clap = function (uid) {
  this.findByIdAndUpdate(
    uid,
    { $inc: { claps: 1 } },
    { new: true },
    (error) => {
      if (error) {
        throw new Error(error)
      }
    }
  )
}

module.exports = mongoose.model('Post', schema)
