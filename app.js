const express = require("express");
const path = require("path");
const app = express();
const port = 80;

app.use("static", express.static("static"));
app.set("view-engine", "pug");
app.set("views", path.join(__dirname, "templates"));

app.get("/", (req, res)=> {
    // res.send("Hello, world!");
    res.status(200).render("index.pug");
})

app.get("/favicon.ico", (req, res)=> {
    res.status(200).redirect("https://pritamcontent.ml/favicon.ico");
})

app.listen(port, ()=> {
    console.log(`Server started at http://127.0.0.1:${port}`);
})