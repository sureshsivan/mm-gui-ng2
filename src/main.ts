import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
} else {
  console.log('Running in Non Production Mode.... >>>> ENV : ', environment.key);
  Error['stackTraceLimit'] = Infinity;
  // require('zone.js/dist/long-stack-trace-zone');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => console.log('Application Bootstrap'))
  .catch(err => console.error(err));
