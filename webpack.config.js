const ENV = process.env.ENV || 'local';
module.exports = require(`./config/webpack/webpack.${ENV}.js`);
