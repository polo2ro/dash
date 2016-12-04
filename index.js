'use strict';

const dashButton = require('node-dash-button');
const Mopidy = require("mopidy");

let dash = dashButton(process.argv[2], 'eth0'); //address from step above
dash.on("detected", function() {

    let host = 'localhost';
    if (undefined !== process.argv[3]) {
        host = process.argv[3];
    }

    let mopidy = new Mopidy({
        webSocketUrl: 'ws://'+host+':6680/mopidy/ws/',
        callingConvention: 'by-position-or-by-name'
    });

    mopidy.on("state:online", function () {
        mopidy.playback.next();
    });
});
