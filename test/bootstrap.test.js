var Sails = require('sails');
var fixtures = require('sails-fixtures');
require('should');

// Global before hook
before(function (done) {
    // Lift Sails with test database
    Sails.lift({
        log: {
            level: 'error'
        },
        models: {
            connection: 'test',
            migrate: 'drop'
        }
    }, function(err) {
        if (err)
            return done(err);

        fixtures.init({
            'dir':'./fixtures',
            'pattern':'*.json'
        });

        done();
    });
});

// Global after hook
after(function (done) {
    console.log(); // Skip a line before displaying Sails lowering logs
    Sails.lower(done);
});
