const express = require('express');
const apiRouter = express.Router();
const profiles = require('../data/profiles.json');

apiRouter.get('/profiles',(req,res) =>{
    res.json(profiles);
});

module.exports = apiRouter;