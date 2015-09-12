#!/usr/bin/env node

var askconfig = require('../../lib');

askconfig({
    name: 'foo'
}, function (err, result) {
    console.log('result', result);
});