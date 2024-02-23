'use strict';

const Ajv = require('ajv');
var ptn = require('..');
var tape = require('tape');
const { existsSync } = require('node:fs');
const path = require('node:path');

const ajv = new Ajv();
const testDataValidation = ajv.compile(require('../schema/test-data-schema.json'));

const data = require('./data.json');

tape('data.json is valid', function(t) {
  t.equal(testDataValidation(data), true);
  t.end();
});


let torrents;
if (existsSync(path.join(__dirname, './additional-data.json'))) {
  const additional = require('./additional-data.json');
  
  tape('additional-data.json is valid', function(t) {
    t.equal(testDataValidation(additional), true);
    t.end();
  });

  torrents = data.concat(additional);
} else torrents = data;


torrents.forEach(function(torrent) {
  var testName = '"' + torrent.name + '"';
  var parts = ptn(torrent.name);

  tape(testName, function (test) {
    var key, testMessage;

    for(key in torrent) {
      if(torrent.hasOwnProperty(key)) {
        if(key === 'name') {
          continue;
        }

        testMessage = key + ': ' + JSON.stringify(torrent[key]);

        test[Array.isArray(torrent[key]) ? 'deepEqual' : 'equal'](
          parts[key],
          torrent[key],
          testMessage
        );
      }
    }

    test.end();
  });
});
