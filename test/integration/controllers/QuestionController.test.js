var request = require('supertest');
var assert = require('assert');

describe('QuestionController', function() {
    describe('#get()', function() {
        it('should return existing question', function (done) {
            request(sails.hooks.http.app)
                .get('/question/1')
                /*.send({ name: 'What is TDD?', question: 'What is TDD?', group: 1 })*/
                .expect(200, done)
                .expect(function(res) {
                    assert(res.body.id, 1);
                    assert(res.body.name, 'What does PHP mean?');
                })
        });
    });
    /*
    describe('#create()', function() {
        it('should create a new question', function (done) {
            request(sails.hooks.http.app)
                .post('/question')
                .send({ name: 'What is TDD?', question: 'What is TDD?', group: 1 })
                .expect(200, done)
                .expect(function(res) {
                    assert(res.body.id, '');
                    assert(res.body.name, 'What is TDD?');
                })
        });
    });
    */
});
