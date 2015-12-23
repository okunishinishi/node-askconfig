#!/usr/bin/env node
"use strict";

const askconfig = require('../../lib');

askconfig({
    name: 'foo'
}, (err, result) => {
    console.log('result', result);
});