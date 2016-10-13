// if((process.env.ENV === 'prod') ||
//     (process.env.ENV === 'production') ||
//     (process.env.BUILD_ENV === 'prod') ||
//     (process.env.BUILD_ENV === 'production')){
//     module.exports = require('./config/webpack.prod.js');
// } else {
//     module.exports = require('./config/webpack.dev.js');
// }
module.exports = require('./config/webpack.dev.js');