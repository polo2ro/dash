var dash_button = require('node-dash-button');
var dash = dash_button("34:d2:70:bc:5b:fc", 'eth0'); //address from step above
dash.on("detected", function() {
    console.log("omg found");
});
