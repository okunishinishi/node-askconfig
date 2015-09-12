/**
 * Test case for askconfig.
 * Runs with nodeunit.
 */

var askconfig = require('../lib/askconfig.js'),
    childProcess = require('child_process'),
    injectmock = require('injectmock');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    injectmock.restoreAll();
    done();
};

exports['Askconfig'] = function (test) {
    var shell = require.resolve('../doc/mockups/mock_some_shell.js');
    var spawn = childProcess.spawn(shell, {
        stdio: [
            process.stdin,
            process.stdout,
            process.stderr
        ]
    });
    setTimeout(function () {
        process.stdin.write('bar\n\n\n');
        spawn.kill();
    }, 500);
    spawn.on('exit', function () {
        test.done();
    });
};

