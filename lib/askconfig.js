/**
 * Ask for configuration.
 * @function askconfig
 * @param {object} props - Values to ask.
 * @param {object} [options] - Optional settings.
 * @param {string} [options.msg] - Message to print before interaction.
 * @param {function} callback - Callback when done.
 */

"use strict";

var async = require('async'),
    argx = require('argx'),
    objnest = require('objnest'),
    Question = require('./question'),
    questionInterface = require('./question_interface');

/** @lends askconfig */
function askconfig(props, options, callback) {
    var args = argx(arguments);
    callback = args.pop('function');
    props = args.shift();
    options = args.pop('object') || {};

    if (options.msg) {
        [].concat(options.msg).forEach(function (msg) {
            console.log(msg);
        });
    }

    var questions = Object.keys(props).map(function (key) {
        return Question.new({
            key: key,
            default: props[key]
        });
    });

    var qi = questionInterface();
    var result = {};
    var i = 0;
    async.eachSeries(questions, function (question, callback) {
        qi.question(question.query(), function (answer) {
            var key = question.key || i;
            i++;
            result[key] = answer || question.default;
            callback(null);
        });
    }, function (err) {
        qi.on('close', function () {
            callback(err, objnest.expand(result));

        });
        qi.close();
    });
}

module.exports = askconfig;
