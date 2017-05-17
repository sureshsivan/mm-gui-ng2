import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {BannerModule} from './banner/banner.module';
import {HomeModule} from './home/home.module';
import {CoreModule} from './core/core.module';
import {UserCpModule} from './user-cp/user-cp.module';

import { ROOT_ROUTES } from './app.routes';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BannerModule,
    HomeModule,
    UserCpModule,
    RouterModule.forRoot(ROOT_ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
