/**
 * Ask for config.
 * @memberof module:askconfig/lib
 * @constructor Question
 * @param {object|string} values - Question values or query.
 */


"use strict";

var extend = require('extend'),
    clc = require('cli-color'),
    util = require('util');

/** @lends Question */
function Question(values) {
    var s = this;
    extend(s, values);
}

Question.prototype = {
    query: function () {
        var s = this;
        var query = clc.cyan('? ') + util.format('%s: ', s.key);
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