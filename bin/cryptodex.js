#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');

program
    .version(pkg.version)
    .command('key', 'Manage API key -- http://nomics.com')
    .command('check', 'Check Coin Prices')
    .parse(process.argv);
