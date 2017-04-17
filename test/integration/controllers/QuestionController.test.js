var request = require('supertest');
var assert = require('assert');

describe('QuestionController', function() {
    describe('#get()', function() {
        it('should return existing question', function (done) {
            request(sails.hooks.http.app)
                .get('/question/1')
                .expect(200, done)
                .expect(function(res) {
                    assert.equal(res.body.id, 1);
                    assert.equal(res.body.name, 'Question 1');
                })
        });
    });

    describe('#create()', function() {
        it('should create a new question', function (done) {
            request(sails.hooks.http.app)
                .post('/question')
                .send({ name: 'Question X', question: 'What is TDD?', group: 1 })
                .expect(200, done)
                .expect(function(res) {
                    let regex = /[0-9]+/;
                    assert.ok(regex.test(res.body.id));
                    assert.equal(res.body.name, 'Question X');
                })
        });
    });

});
