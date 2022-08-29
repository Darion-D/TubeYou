const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    url: {type: String, required: true},
    title: {type: String, required: true},
    description: String,
    uploader: {type: String, required: true}
}, {timestamps: true})

const Video = mongoose.model('Video', videoSchema)

module.exports = Comment