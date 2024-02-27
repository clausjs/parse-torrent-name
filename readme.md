# Torrent Parser (parse-torrent-name fork)
![Build Status](https://github.com/clausjs/torrent-parser/actions/workflows/node.js.yml/badge.svg) [![Maintainability](https://api.codeclimate.com/v1/badges/22c7b9ac7a879e113863/maintainability)](https://codeclimate.com/github/clausjs/torrent-parser/maintainability)

Parses torrent name of a movie or TV show.

**Possible parts extracted:**

- audio
- codec
- transcoding
- container
- episode
- format
- episodeName
- excess
- extended
- garbage
- group
- hardcoded
- language
- proper
- quality
- region
- repack
- resolution
- season
- title
- website
- widescreen
- year

## Usage:
```javascript
var ptn = require('parse-torrent-name');

ptn('The.Staying.Alive.S05E02.720p.HDTV.x264-KILLERS[rartv]');
/*
{ season: 5,
  episode: 2,
  resolution: '720p',
  quality: 'HDTV',
  codec: 'x264',
  group: 'KILLERS[rartv]',
  title: 'The Staying Alive' }
*/

ptn('Captain Russia The Summer Soldier (2014) 1080p BrRip x264 - YIFY');
/*
{ year: 2014,
  resolution: '1080p',
  quality: 'BrRip',
  codec: 'x264',
  group: 'YIFY',
  title: 'Captain Russia The Summer Soldier' }
*/

ptn('AL.288-1.2014.HC.HDRip.XViD.AC3-juggs[ETRG]');
/*
{ year: 2014,
  quality: 'HDRip',
  codec: 'XViD',
  audio: 'AC3',
  group: 'juggs[ETRG]',
  hardcoded: true,
  title: 'AL 288-1' }
*/
```

## Extractable pieces of information
| Supported TV [formats](https://www.sony.com/electronics/support/articles/00006681) |
| ------------------------------------------------------------------------------- |
| PAL |
| NTSC |
| SECAM |

| Supported video [qualities](https://en.wikipedia.org/wiki/Pirated_movie_release_types) |
| ----------- |
| HDTV |
| PDTV |
| CAM |
| HDCAM |
| BrRip |
| WEB-DL |
| TS |
| HDRip |
| DVDRip |
| DVD 5/9/and 10 |
| CamRip |
| WebRip |
| WEB |
| Bluray |
| DVDScr |

| Supported audio [codecs](https://en.wikipedia.org/wiki/Audio_codec) |
| ------------------- |
| MP3 |
| DDP/DDP5.1/DDP7.1 |
| DD2 |
| Dual Audio |
| LiNE |
| DTS/DTS HD MA 5/6/7.1 |
| AAC/AAC 2.0 |
| FLAC/FLAC 2.0 |
| AC3/AC3 5.1 |
| True HD Atmos 5/7/9.1 |

| Supported [transcoding](https://www.reddit.com/r/radarr/comments/6bg9k1/whats_the_diff_between_bluray_and_remux/) strings |
| ----------------------------- |
| REMUX |

| Supported [containers](https://en.wikipedia.org/wiki/Container_format) |
| --- |
| MKV |
| AVI |






