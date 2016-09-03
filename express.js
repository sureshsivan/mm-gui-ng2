var express = require('express');
var glob = require('glob');
var path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compress = require('compression');
var methodOverride = require('method-override');
var swig = require('swig');

var jwt = require('express-jwt');
var jwtCheck = jwt({
  secret: new Buffer('SuHATR3uPsuN0fqSAtVP-PHGZV-idgkqsRp0z_VkYAy2QtvHCHb1lEojt7WHd4fB', 'base64'),
  audience: 'RQwg1Wklr2d1fFwzGkmjX09FVocuI9cb'
});



module.exports = function(app, config) {
  var env = process.env.ENV || 'development';
  app.locals.ENV = env;
  app.locals.ENV_DEVELOPMENT = env == 'development';

  app.engine('swig', swig.renderFile);
  if(env == 'development'){
    app.set('view cache', false);
    swig.setDefaults({ cache: false });
  }
  app.set('views', config.root + '/app/views');
  app.set('view engine', 'swig');

  // app.use(favicon(config.root + '/public/img/favicon.ico'));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // app.use('/mm/api/', jwtCheck);

  app.use(cookieParser());
  app.use(compress());
  app.use(express.static(__dirname + '/dist'));
  app.use(methodOverride());

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist' + '/index.html'));
  });
  app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist' + '/index.html'));
  });
  
  if(app.get('env') === 'development'){
    app.use(function (err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err,
        title: 'error'
      });
    });
  }

  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
      });
  });

};
