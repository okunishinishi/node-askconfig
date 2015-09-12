/**
 * Test case for questionInterface.
 * Runs with nodeunit.
 */

var questionInterface = require('../lib/question_interface.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Question interface'] = function (test) {
    var qi = questionInterface();
    test.ok(qi);
    qi.on('close', function () {
        test.done();
    });
    qi.close();
};

