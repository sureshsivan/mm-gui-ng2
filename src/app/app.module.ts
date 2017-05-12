import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {BannerModule} from './banner/banner.module';
import {HomeModule} from './home/home.module';
import {CoreModule} from './core/core.module';
import {UserCpModule} from './user-cp/user-cp.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BannerModule,
    HomeModule,
    UserCpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
