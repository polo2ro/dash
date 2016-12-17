'use strict';

const dashButton = require('node-dash-button');
const Mopidy = require("mopidy");


function playPause() {
    mopidy.playback.getState().done(state => {

        console.log(state);

        if ('playing' === state) {
            mopidy.playback.pause();
        } else {
            mopidy.playback.next();
            mopidy.playback.play();
        }
    });
}


let mac = process.argv[2];

if (undefined === mac || null === mac) {
    throw new Error('mac address is a mandatory parameter');
}

let host = 'localhost:6680';
if (undefined !== process.argv[4]) {
    host = process.argv[4];
}

let iface = 'eth0';
if (undefined !== process.argv[3]) {
    iface = process.argv[3];
}


let mopidy = new Mopidy({
    autoConnect: false,
    webSocketUrl: 'ws://'+host+'/mopidy/ws/',
    callingConvention: 'by-position-or-by-name'
});

let mopidyConnected = false;
let dash = dashButton(process.argv[2], iface);
dash.on("detected", function() {

    if (!mopidyConnected) {
        mopidyConnected = true;
        mopidy.connect();
        mopidy.on("state:online", playPause);
        return;
    }

    playPause();
});
