// angular imports
import {NgModule}         from '@angular/core';
import {CommonModule}     from '@angular/common';
import {BrowserModule}    from '@angular/platform-browser';
// App Imports
import { AppComponent }   from './app.component';
// module imports
import {CoreModule}       from "./modules/core/core.module";
import {BannerModule}     from "./modules/banner/banner.module";
// import {BannerModule}     from "./modules/banner/banner.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BannerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
