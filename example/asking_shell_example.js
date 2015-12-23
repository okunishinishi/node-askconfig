#!/usr/bin/env node
"use strict";

const askconfig = require('askconfig');

askconfig({
    name: 'default-name',
    description: ''
}, (err, result) => {
    if (err) {
        console.error(err);
        process.exit(1);
    } else {
        console.log("Result:", result);
        process.exit(0);
    }
});

