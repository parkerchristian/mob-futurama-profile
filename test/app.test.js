const request = require('supertest');
const app = require('../lib/app');
const Profile = require('../lib/models/Profile');

describe.skip('APP ROUTES', () => {
  afterEach(() => {
    return Profile.drop();
  });

  it('create profile', () => {
    return request(app)
      .post('/profiles')
      .send({
        name: 'Mob',
        favCharacter: 'Bender',
      })
      .then(res => {
        // console.log('**', res.body);
        expect(res.body).toEqual({
          name: 'Mob',
          favCharacter: 'Bender',
          tagline: expect.any(String),
          _id: expect.any(String)
        });
      });
  });
});
