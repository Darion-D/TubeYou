// Importing Statements
const express = require(`express`);
const methodOverride = require(`method-override`);

require(`./config/db.connections`)

const videoController = require(`./controllers/video_controller`);

// App configuration
const PORT = 4000;
const app = express();
app.set(`view engine`, `ejs`);

// Middleware
app.use(express.static(`public`));
app.use(methodOverride(`_method`));

app.use(`/videos`, videoController);



app.listen(PORT, () => {
    console.log(`Listening for client on port ${PORT}`);
});
