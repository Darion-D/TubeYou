const express = require(`express`);
const router = express();

router.use(express.json());

router.use(express.urlencoded({ extended: false }));

const db = require('../models')



router.get('/:id/edit', async (req, res, next) => {
    res.render('comments/edit.ejs');       
})

router.post('/', async (req, res, next) => {
    try {        
        const newComment = await db.Comment.create(req.body)
        res.redirect(`/videos/` + newComment.video) 
    } catch (err) {
        console.log(err)
        next()      
    }
})

router.delete('/', async (req, res, next) => {
    res.redirect('/videos');
})

router.put('/', async (req, res, next) => {
    res.send(`comment updated`)
})

module.exports = router