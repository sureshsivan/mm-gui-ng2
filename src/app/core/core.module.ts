import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HeaderModule} from '../header/header.module';
import {FooterModule} from '../footer/footer.module';
import {AuthModule} from '../auth/auth.module';
import {HeaderBarComponent} from '../header/components/header-bar/header-bar.component';
import {UserProfileIndComponent} from '../header/components/user-profile-ind/user-profile-ind.component';
import {FooterComponent} from '../footer/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AuthModule,
    HeaderModule,
    FooterModule
  ],
  exports: [
    AuthModule,
    HeaderModule,
    FooterModule
  ],
  declarations: []
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('Core module is meant for one time load and must be loaded in App Module - Not anywhere else !!!');
    }
  }
}
