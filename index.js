#!/usr/bin/env node
'use strict';

const program = require('commander');
const config = require('config');
const Phaxio = require('phaxio-promise');

// These are the TEST keys
const PHAXIOSECRET = config.get('phaxio.secret');
const PHAXIOKEY = config.get('phaxio.key');

program
  .version('1.0.0')
  .option('-c, --content <required>', 'Path to content file')
  .option('-n, --number <required>', 'Phone number');
program.parse(process.argv);

const phaxio = new Phaxio(PHAXIOKEY, PHAXIOSECRET);

phaxio.accountStatus().then((res, rej)=>{consonle.log(res)});
