#!/usr/bin/env node

var askconfig = require('askconfig');

askconfig({
    name: 'default-name',
    description: ''
}, function (err, result) {
    if (err) {
        console.error(err);
        process.exit(1);
    } else {
        console.log("Result:", result);
        process.exit(0);
    }
});

