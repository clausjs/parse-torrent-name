# Test Data
Sample test data is provided in `test/data.json`. This file includes the examples laid out in the project's README and examples defined in the (source project's tests)[https://github.com/jzjzjzj/parse-torrent-name/blob/master/test.js]. 

If you'd like to include additional torrents to test from your own selection you can add those to `test/additional-data.json`. The test runner will check for the existance of this file before and also run test validation on it. (See validation below) attempting to run tests from it. It will concat any tests inside to the tests from `data.json`.

If you have additional test data and want to run the tests and ignore it temporarily run `NO_ADDITIONAL=true npm run test`. This will ignore any tests in `test/additional-data.json` regardless of their presence.

## JSON Validation
The test also now includes JSON validation as part of the test. This will validate that your test data has apprioriate properties and will count as a test failure if its not valid.

## Generating more tests
`test/generators` has a python script which can be run to extract torrent names from qBittorrent running the (Web UI)[https://github.com/qbittorrent/qBittorrent/wiki/Explanation-of-Options-in-qBittorrent#user-content-Web_UI]. A Python environment needs to be setup with the option to install python packages with pip.
After running `pip install qbittorrent-api` and updating the script's `host`, `username` and `password` property. `host` will need to point to the location of the WebUI including the port if not using a public address. The script will create the barebones needed to add additional tests to the testing suite. For example, if the following torrents are extracted: 

- Next.Level.Chef.S02E07.720p.WEB.h264-BAE
- Cobra.Kai.S05E05.720p.WEB.h264-KOGi
- QI.S20E05.Testing.1080p.HDTV.H264-DARKFLiX

an output file will be created:

```JSON
[
    {
        name: "Next.Level.Chef.S02E07.720p.WEB.h264-BAE"
    },
    {
        name: "Cobra.Kai.S05E05.720p.WEB.h264-KOGi"
    },
    {
        name: "QI.S20E05.Testing.1080p.HDTV.H264-DARKFLiX"
    }
]
```

The tests will validate for each input filename any properties you add to the generated objects that need to be validated. For instance:

```JSON
[
    {
        name: "Next.Level.Chef.S02E07.720p.WEB.h264-BAE",
        title: "Next Level Chef",
        season: 2,
        episode: 7,
        resolution: "720p",
        quality: "WEB",
        codec: "h264",
        group: "BAE"
    }
]
```

Will validate that the named torrent can be parsed into all the supplied values.