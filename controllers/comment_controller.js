const express = require(`express`);
const router = express();

router.use(express.json());

router.use(express.urlencoded({ extended: false }));

const db = require('../models')




router.get('/new', async (req, res, next) => {

    try {
        const allComments= await db.Comment.find().populate('video').exec()
        const allVideos = await db.Video.find()

        
        res.render('comments/new.ejs', { comments: allComments, videos: allVideos })
    } catch (err) {
        console.log(err)
        next()
    }
});


// router.get('/new', (req, res) => {
//     res.render('comments/new.ejs') 
// })



router.get('/:id', async (req, res, next) => {
    try {
        const foundComment = await db.Comment.findById(req.params.id).populate('video').exec()
        
        res.render('comments/show.ejs', { comment: foundComment })
    } catch (err) {
        console.log(err)
        next()
    }
})



router.get('/:id/edit', async (req, res, next) => {
    res.render('comments/edit.ejs');       
})



router.post('/', async (req, res, next) => {
    try {
        const newComment = await db.Comment.create(req.body)
        res.redirect(`/videos/` + newComment.video) // after creation take user to the review
        console.log(newComment)
    } catch (err) {
        console.log(err)
        next()      
    }
})



router.delete('/:id', async (req, res, next) => {
    res.redirect('/videos');
})


router.put('/:id', async (req, res, next) => {
    res.send(`comment updated`)
})

module.exports = router