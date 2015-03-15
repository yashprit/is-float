#!/usr/bin/env node

'use strict';
var meow = require('meow');
var isFloat = require('./');

var cli = meow({
  help: [
    'Usage',
    '  is-float <input>',
    '',
    'Example',
    '  is-float 2'
  ].join('\n')
});

isFloat(cli.input[0]);
