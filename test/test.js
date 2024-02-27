'use strict';

let skipAdditional = false;
if (Boolean(process.env.NO_ADDITIONAL)) skipAdditional = true; 

const Ajv = require('ajv');
var ptn = require('..');
var tape = require('tape');
const { existsSync } = require('node:fs');
const path = require('node:path');

const ajv = new Ajv();
const testDataValidation = ajv.compile(require('../schema/test-data-schema.json'));

const data = require('./data.json');

tape('data.json is valid', function(t) {
  const validJsonData = testDataValidation(data);
  if (!validJsonData) {
    testDataValidation.errors.forEach((error) => {
      t.fail(`${error.message} at ${error.instancePath}: ${error.schemaPath}.`);
    });
  } else t.pass('data.json is valid.');
  t.end();
});

let torrents;
if (!skipAdditional && existsSync(path.join(__dirname, './additional-data.json'))) {
  const additional = require('./additional-data.json');
  
  tape('additional-data.json is valid', function(t) {
    const validAdditionalData = testDataValidation(additional);
    if (!validAdditionalData) {
      testDataValidation.errors.forEach((error) => {
        t.fail(`${error.message} at ${error.instancePath}: ${error.schemaPath}.`);
      });
    } else t.pass('additional-data.json is valid.');
    t.end();
  });

  torrents = data.concat(additional);
} 
else torrents = data;


torrents.forEach(function(torrent) {
  var testName = '"' + torrent.name + '"';
  var parts = ptn(torrent.name);

  tape(testName, function (test) {
    var key, testMessage;

    for(key in torrent) {
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

    test.end();
  });
});
