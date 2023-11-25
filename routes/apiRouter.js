'use strict';
const express = require('express');
const apiRouter = express.Router();
const path = require("path");
const fs = require("fs");
const profiles = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/profiles.json')));

apiRouter.get('/profiles',(req,res) => {
    res.json(profiles);
});

apiRouter.get("/profiles/:id", (req, res) => {
    const profileId = parseInt(req.params.id)
    const profile = profiles.find((pr) => pr.id === profileId);

    if(profile) {
        res.json(profile);
    }
    else {
        res.status(404).json({ error: "No such profile." });
    }

});

module.exports = apiRouter;