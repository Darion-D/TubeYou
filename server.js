// Importing Statements
const express = require(`express`);
const methodOverride = require(`method-override`);

require(`./config/db.connections`)

const videoController = require(`./controllers/video_controller`);
const commentController = require(`./controllers/comment_controller`);

// App configuration
const PORT = 4000;
const app = express();
app.set(`view engine`, `ejs`);

// Middleware
app.use(express.static(`public`));
app.use(methodOverride(`_method`));

app.use(`/videos`, videoController);
app.use(`/comments`,commentController);

app.get(`/`, (req, res) => {
    res.redirect(`/videos`);
});



app.listen(PORT, () => {
    console.log(`Listening for client on port ${PORT}`);
});
