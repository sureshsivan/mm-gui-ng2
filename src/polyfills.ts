import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

if (process.env.ENV === 'prod' || process.env.ENV === 'production') {
  console.log('Running in Production Mode.... !!!!', process.env.ENV);
    // Production
} else {
  console.log('Running in Non Production Mode.... >>>>', process.env.ENV);
  // Development
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
