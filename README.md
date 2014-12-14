osa-spotify
====

![](https://img.shields.io/npm/dm/osa-spotify.svg)
![](https://img.shields.io/npm/v/osa-spotify.svg)
![](https://img.shields.io/npm/l/osa-spotify.svg)

A node.js module to control Spotify on OSX.

Installation
===

**Requires OSX 10.10 Yosemite.**

```bash
npm install osa-spotify
```

Usage
====

```js
var spotify = require('osa-spotify');

// Play a song with the specified Spotify URI
spotify.playTrack('spotify:track:0FutrWIUM5Mg3434asiwkp');

// Pause playback
spotify.pause();

// Resume playback
spotify.play();

// Toggle playback (if paused, play; if playing, pause)
spotify.toggle();

// Play next track in current playlist
spotify.next();

// Play previous track in current playlist
spotify.back();

/*
 *  Note: All methods can accept a callback function that will be
 *      executed when the operation completes
 */
```
