import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
  console.log('Running in Production Mode.... !!!!');
    // Production
} else {
  console.log('Running in Non Production Mode.... >>>>');
  // Development
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
