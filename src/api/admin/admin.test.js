const request = require('supertest');

const app = require('../../app');

describe('GET /admin', () => {
  it('Should respond with a 401 status code', () =>
    request(app)
      .get('/admin')
      .expect('Content-Type', /json/)
      .expect(401));
});
