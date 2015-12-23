/**
 * Test case for askconfig.
 * Runs with mocha.
 */
"use strict";

const askconfig = require('../lib/askconfig.js'),
    childProcess = require('child_process'),
    assert = require('assert'),
    injectmock = require('injectmock');

describe('askconfig', () => {
    before((done) => {
        done();
    });

    after((done) => {
        injectmock.restoreAll();
        done();
    });

    it('Askconfig', (done) => {
        let shell = require.resolve('../doc/mockups/mock_some_shell.js');
        let spawn = childProcess.spawn(shell, {
            stdio: [
                process.stdin,
                process.stdout,
                process.stderr
            ]
        });
        //process.stdin.write('bar\n\n\n');
        spawn.kill();
        spawn.on('exit', () => {
            done();
        });
    });
});

