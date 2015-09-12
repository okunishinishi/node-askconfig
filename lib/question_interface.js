/**
 * Create question interface.
 * @function questionInterface
 */

"use strict";

var readline = require('readline');

/** @lends questionInterface */
function questionInterface() {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

module.exports = questionInterface;
