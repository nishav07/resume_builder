const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');
app.use(express.urlencoded({ extended:true }));
app.use('/uploads', express.static('uploads'));
app.use(methodOverride('_method'));
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));
app.use(express.static(path.join(__dirname , "public")));

app.get("/" , (req,res) => {
    req.params = {id,data}
})
app.listen(port, () => {
    console.log(`app working fine at port ${port}`);
})

app.get("/" , (req,res) => {
    const params = req.params;
    res.render("index.ejs");
})

app.get("/form" , (req,res) => {
    res.render("form.ejs");
})

app.post("/form" , (req,res) => {
    let details = req.body;
})
