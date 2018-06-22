const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {
    describe('/ Route', () => {
        it('should return hello world response', done => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    });
                })
                .end(done);
        });
    }) 
    

    describe('/users route', () => {
        it('should return an array of users', done => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'John',
                        age: 25
                    });
                })
                .end(done);
        });
    });
});

