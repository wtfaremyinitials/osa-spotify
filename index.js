var osa = require('osa2')

function play(uri) {
    if (uri)
        return playTrack(uri)
    return osa(() => Application('Spotify').play())()
}

function playTrack(uri) {
    return osa((uri) => Application('Spotify').playTrack(uri))(uri)
}

function pause() {
    return osa(() => Application('Spotify').pause())()
}

function toggle() {
    return osa(() => Application('Spotify').playpause())()
}

function next() {
    return osa(() => Application('Spotify').nextTrack())()
}

function prev() {
    return osa(() => Application('Spotify').previousTrack())()
}

function getCurrentTrack() {
    return osa(() => {
        var track = Application('Spotify').currentTrack
        return {
            id: track.id(),
            name: track.name(),
            album: track.album(),
            artist: track.artist(),
            number: track.trackNumber(),
            duration: track.duration(),
            artwork: track.artworkUrl(),
            popularity: track.popularity(),
            albumArtist: track.albumArtist(),
        }
    })()
}

function getPlayerState() {
    return osa(() => {
        var s = Application('Spotify')
        return {
            state: s.playerState(),
            volume: s.soundVolume(),
            position: s.playerPosition(),
            repeating: s.repeating(),
            shuffling: s.shuffling(),
        }
    })()
}

module.exports = {
    play, pause, toggle, next, prev,
    getCurrentTrack, getPlayerState
}
