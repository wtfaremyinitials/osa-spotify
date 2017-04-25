osa-spotify
====

![](https://img.shields.io/npm/dm/osa-spotify.svg)
![](https://img.shields.io/npm/v/osa-spotify.svg)
![](https://img.shields.io/npm/l/osa-spotify.svg)

> Control the Spotify desktop macOS app

Installation
===

**Requires OSX 10.10 Yosemite.**

```bash
npm install osa-spotify --save
```

Usage
====

```js
var spotify = require('osa-spotify')

// Play a song with a specific Spotify URI
spotify.play('spotify:track:0FutrWIUM5Mg3434asiwkp')

// Pause playback
spotify.pause()

// Resume playback
spotify.play()

// Toggle playback (if paused, play; if playing, pause)
spotify.toggle()

// Play next track in current playlist
spotify.next()

// Play previous track in current playlist
spotify.back()

// Note: All functions return promises that resolve when the operation completes
```
