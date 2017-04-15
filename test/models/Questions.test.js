describe('Questions', function() {
    it ('should not be empty', function(done) {
        Question.find().exec(function(err, questions) {
            questions.length.should.not.be.eql(0);

            done();
        });
    });
});