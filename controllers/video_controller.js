const express = require(`express`);
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: false }));

const db = require(`../models`);
const videos = require(`../models/video_model`);

router.get(`/`, async (req, res) => {
    try {
        const allVideos = await db.Video.find();
        res.render(`index.ejs`, { videos: allVideos });
    } catch (error) {
        console.log(error);
        res.redirect(`/404`);
    } 
});

router.get(`/new`, (req, res) => {
    res.render(`new.ejs`);
});

router.get(`/:id`, async (req, res) => {
    try {
        const foundVideo = await db.Video.findById(req.params.id);
        const foundComments = await db.Comment.find({video: foundVideo._id})
        res.render(`show.ejs`, { video: foundVideo, id: foundVideo._id, comments: foundComments } );
    } catch (error) {
        console.log(error)
        res.redirect(`/404`)
    }

    
});

router.get(`/:id/edit`, async (req, res) => {
    try {
        const foundVideo = await db.Video.findById(req.params.id);
        res.render(`edit.ejs`, { video: foundVideo, id: foundVideo._id });
    } catch (error) {
        console.log(error)
        res.redirect(`/404`)
    }
})

router.post(`/`, async (req, res) => {
    try {
        const newVideo = await db.Video.create(req.body);
        res.redirect(`/videos`);     
    } catch (error) {
        console.log(error);
        res.redirect(`/404`);
    }
});

router.put(`/:id`, async (req, res) => {
    try {
        const updateData = req.body;
        await db.Video.findByIdAndUpdate(req.params.id, updateData, {new: true});
        res.redirect(`/videos`);
    } catch (error) {
        console.log(error);
        res.redirect(`/404`)
    }
});

router.delete(`/:id`, async (req, res) => {
    try {
        const foundVideo = await db.Video.findByIdAndDelete(req.params.id);
        res.redirect(`/videos`);
    } catch (error) {
        console.log(error);
        res.redirect(`/404`);
    }
})

module.exports = router;
