const request = require('supertest')
require('dotenv').config
const server = require('../server')
const app = server()

// testing user endpoint
describe('GET /api/answers/user', function(done){
    it('returns a JSON object containing the users name and their unique token',function (done) {
        request(app)
            .get('/api/answers/user')
            .expect('Content-Type', /json/)
            .expect({name: process.env.NAME, token : process.env.TOKEN}, done);
    });
});
