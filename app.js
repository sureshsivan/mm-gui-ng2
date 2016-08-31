

var express = require('express'),
    config = require('./config/config'),
    glob = require('glob'),
    path = require('path');

var app = express();

require('./express')(app, config);

app.listen(config.port, function () {
    console.log('Express server listening on port ' + config.port);
});

