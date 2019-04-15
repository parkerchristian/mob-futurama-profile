const { Router } = require('express');
const Profile = require('../models/Profile');

module.exports = Router()
  .post('/', (req, res) => {
    const {
      name,
      favCharacter,
    } = req.body;
    Profile
      .create({ name, favCharacter })
      .then(createdProfile => {
        res.send(createdProfile);
      });

  });
