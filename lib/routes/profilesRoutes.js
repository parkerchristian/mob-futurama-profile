const { Router } = require('express');
const Profile = require('../models/Profile');
// const randomQuote = require('../services/futuramaApi');

module.exports = Router()
  .post('/', (req, res) => {
    const {
      name,
      favCharacter,
    } = req.body;
    // return randomQuote(favCharacter)
    //   .then(tagline => tagline);
    Profile
      .create({ name, favCharacter })
      .then(createdProfile => {
        res.send(createdProfile);
      });

  });
