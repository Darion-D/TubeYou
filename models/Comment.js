const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    user: {type: String, required: false},
    body: {type: String, required: false},
    video: {
        type: mongoose.Types.ObjectId,
        ref: 'Video'
    }
}, {timestamps: true})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment

