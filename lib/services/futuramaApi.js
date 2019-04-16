const request = require('superagent');

module.exports = (character) => {
  return request
    .get(`futuramaapi.herokuapp.com/api/characters/${character}/1`)
    .then(res => res.body);
};
