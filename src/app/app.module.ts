// angular imports
import {NgModule}         from '@angular/core';
import {CommonModule}     from '@angular/common';
import {BrowserModule}    from '@angular/platform-browser';
// App Imports
import { AppComponent }   from './app.component';
// module imports
import {CoreModule}       from "./modules/core/core.module";
import {BannerModule}     from "./modules/banner/banner.module";
import {RouterModule} from "@angular/router";
import {AuthService} from "./modules/auth/services/UserAuth.service";
// import {BannerModule}     from "./modules/banner/banner.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(null /* application root routes*/, { useHash: true }),
    CoreModule,
    BannerModule
  ],
  bootstrap: [AppComponent],
  providers: [AuthService]
})
export class AppModule { }
