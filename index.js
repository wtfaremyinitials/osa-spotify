var q    = require('q');
var osa  = require('osa');
var osaq = q.denodeify(osa);
var noop = function(){};

var Spotify = {

    pause: function(cb) {
        return osaq(function() {
            Application('Spotify').pause();
            return {};
        }, cb);
    },

    play: function(cb) {
        return osaq(function() {
            Application('Spotify').play();
            return {};
        }, cb);
    },

    toggle: function(cb) {
        return osaq(function() {
            Application('Spotify').playpause();
            return {};
        }, cb);
    },

    next: function(cb) {
        return osaq(function() {
            Application('Spotify').nextTrack();
            return {};
        }, cb);
    },

    back: function(cb) {
        return osaq(function() {
            Application('Spotify').previousTrack();
            return {};
        }, cb);
    },

    playTrack: function(uri, cb) {
        return osa(function(uri) {
            Application('Spotify').playTrack(uri);
            return {};
        }, uri, cb || noop);
    }
};

module.exports = Spotify;
