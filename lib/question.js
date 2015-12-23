/**
 * Ask for config.
 * @memberof module:askconfig/lib
 * @constructor Question
 * @param {object|string} values - Question values or query.
 */


"use strict";

const extend = require('extend'),
    clc = require('cli-color'),
    util = require('util');

/** @lends Question */
function Question(values) {
    let s = this;
    extend(s, values);
}

Question.prototype = {
    query: function () {
        let s = this;
        let query = clc.cyan('? ') + util.format('%s: ', s.key);
        if (s.default) {
            query += clc.blackBright(util.format('(%s) ', s.default));
        }
        return query;
    },
    default: null,
    key: null
};

Question.new = function (values) {
    return new Question(values);
};

module.exports = Question;