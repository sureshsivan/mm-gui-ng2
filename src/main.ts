import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

import '../public/css/styles.css';
// import 'jquery/dist/jquery.js';
import 'semantic-ui-css/semantic.css';
import 'semantic-ui-css/semantic.js';

if (process.env.ENV === 'production') {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
