var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development',
    mongoUsername = process.env.MONGO_USERNAME || '',
    mongoPassword = process.env.MONGO_PASSWORD || '',
    mongoHost = process.env.MONGO_SVC_URL || '',
    mongoDbName = process.env.MONGO_DB_NAME || '',
    mongoSvcUrl = 'mongodb://' + mongoUsername + ':' + mongoPassword + '@' + mongoHost + '/' + mongoDbName;
// mongodb://<dbuser>:<dbpassword>@ds013486.mlab.com:13486/mm-dev

var config = {
  development: {
    root: rootPath,
    port: process.env.PORT || 3000,
  },

  test: {
    root: rootPath,
    port: process.env.PORT || 3000,
  },

  production: {
    root: rootPath,
    port: process.env.PORT || 3000,
  }
};

module.exports = config[env];
