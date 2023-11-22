"use strict";

const express = require("express");
const profilesRouter  = express.Router();
const fs = require('fs');
const path = require('path');


// Helper function to load profiles
function loadProfiles(callback) {
    const filePath = path.join(__dirname, '../data/profiles.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, JSON.parse(data));
      }
    });
  }

  // GET request for profiles listing page
profilesRouter.get('/profiles', (req, res) => {
    loadProfiles((err, profiles) => {
      if (err) {
        res.status(500).send('Error loading profiles');
      } else {
        res.render('profiles', {profiles});
      }
    });
  });

 // GET request for individual profiles
profilesRouter.get('/profiles/:profileId', (req, res) => {
    loadProfiles((err, profiles) => {
      if (err) {
        res.status(500).send('Error loading profiles');
      } else {
        const profile = profiles.find(p => p.id.toString() === req.params.profileId);
        if (profile) {
          // Correctly specify the layout in the options object for res.render
          res.render('profile', { 
            profile: profile, 
            profiles: profiles, 
            layout: './layouts/sidebar'
          });
        } else {
          res.status(404).send('Profile not found');
        }
      }
    });
  });

module.exports = profilesRouter ;
