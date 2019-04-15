const request = require('supertest');
const app = require('../lib/app');
//const Profile = require('../lib/models/Profile');

describe('APP ROUTES', () => {

  it('create profile', () => {
    return request(app)
      .post('/profiles')
      .send({
        name: 'Mob',
        favCharacter: 'Jimmy',
      })
      .then(res => {
        expect(res.body).toEqual({
          name: 'Mob',
          favCharacter: 'Jimmy',
          _id: expect.any(String)
        });
      });
  });
});
