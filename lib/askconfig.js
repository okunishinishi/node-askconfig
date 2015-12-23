/**
 * Ask for configuration.
 * @function askconfig
 * @param {object} props - Values to ask.
 * @param {object} [options] - Optional settings.
 * @param {string} [options.msg] - Message to print before interaction.
 * @param {function} callback - Callback when done.
 */

"use strict";

const async = require('async'),
    argx = require('argx'),
    objnest = require('objnest'),
    Question = require('./question'),
    questionInterface = require('./question_interface');

/** @lends askconfig */
function askconfig(props, options, callback) {
    let args = argx(arguments);
    callback = args.pop('function');
    props = args.shift();
    options = args.pop('object') || {};

    if (options.msg) {
        [].concat(options.msg).forEach((msg) => {
            console.log(msg);
        });
    }

    let questions = Object.keys(props).map((key) => {
        return Question.new({
            key: key,
            default: props[key]
        });
    });

    let qi = questionInterface();
    let result = {};
    let i = 0;
    async.eachSeries(questions, (question, callback) => {
        qi.question(question.query(), (answer) => {
            let key = question.key || i;
            i++;
            result[key] = answer || question.default;
            callback(null);
        });
    }, (err) => {
        qi.on('close', () => {
            callback(err, objnest.expand(result));
        });
        qi.close();
    });
}

module.exports = askconfig;
