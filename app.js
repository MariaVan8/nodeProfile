"use strict";

const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');

const port = process.envPORT || 3003;

// tell Express where to find our templates (views)
app.set("views", path.join(__dirname, "views"));
// set the view engine to ejs
app.set('view engine', 'ejs');

// import express-ejs-layouts
const expressLayouts = require("express-ejs-layouts");
// tell Express to use express-ejs-layouts
app.use(expressLayouts);
// Set the default layout
app.set("layout", "./layouts/full-width");

// parse application/x-www-form-urlencoded
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static("public"));
app.use(logger('dev'));

app.locals.title = 'My Awesome App';
app.locals.copyright = new Date().getFullYear();
app.locals.pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Profiles", path: "/profiles" },
    { name: "Contact Us", path: "/contact" }
];

// Routes
const indexRouter = require('./routes/indexRouter');
const profileRouter = require('./routes/profilesRouter');
const apiRouter = require('./routes/apiRouter');

app.use('/', indexRouter);
app.use('/',  profileRouter);
app.use('/api', apiRouter);

// catch any unmatched routes
app.all("/*", (req, res) => {
    res.status(404).send("File Not Found");
});

// start listening
app.listen(port, () => console.log(`Example app listening on port ${port}!`));