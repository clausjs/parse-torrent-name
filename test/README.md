# Test Data
Sample test data is provided in `test/data.json`. This file includes the examples laid out in the project's README and examples defined in the (source project's tests)[https://github.com/jzjzjzj/parse-torrent-name/blob/master/test.js]. 

If you'd like to include additional torrents to test from your own selection you can add those to `test/additional-data.json`. The test runner will check for the existance of this file before and also run test validation on it. (See validation below) attempting to run tests from it. It will concat any tests inside to the tests from `data.json`.

If you have additional test data and want to run the tests and ignore it temporarily run `NO_ADDITIONAL=true npm run test`. This will ignore any tests in `test/additional-data.json` regardless of their presence.

# JSON Validation
The test also now includes JSON validation as part of the test. This will validate that your test data has apprioriate properties and will count as a test failure if its not valid.