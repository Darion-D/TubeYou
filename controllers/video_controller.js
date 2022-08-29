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
        console.log(error)
    }
    
});

router.get(`/:id`, async (req, res) => {

    try {

        const foundVideo = await db.Video.findById(req.params.id);

        res.render(`show.ejs`, { video: foundVideo, id: foundVideo._id } );
        
    } catch (error) {
        console.log(error)
    }

    
});

router.post(`/`, async (req, res) => {
    try {
        
        const newVideo = db.Video.create(req.body);

        res.redirect(`/`);
    } catch (error) {
        console.log(error);
    }
})