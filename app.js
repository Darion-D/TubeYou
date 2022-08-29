const express = require("express")
const app = express()
const PORT = 4000

app.listen(PORT, function () {
    console.log(`listening on PORT:${PORT}`)
})

app.set("ejs")

app.get("/", function (req, res) {
    res.render(`home.ejs`)
})