const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server Tests', () => {

  describe('GET/', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page Not Found'
          })
        })
        .end(done);
    });
  });

  describe('GET/users', () => {
    it('should return my user object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: "Dan",
            age: 30
          })
        })
        .end(done);
    })

  })
})
