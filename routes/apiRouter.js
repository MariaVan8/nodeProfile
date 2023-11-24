'use strict';
const express = require('express');
const apiRouter = express.Router();
const path = require("path");
const {profile} = require('../data/profiles.json');

apiRouter.get('/profiles',(req,res) => {
    res.json(profile);
});

apiRouter.get("/profiles/:id", (req, res) => {
    const profileId = parseInt(req.params.id)
    profile.forEach(element => {
        if(element.id === profileId) {
            res.json(element)
        }
    });
});

module.exports = apiRouter;