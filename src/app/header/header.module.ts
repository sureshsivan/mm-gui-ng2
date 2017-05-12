import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import {UserProfileIndComponent} from './components/user-profile-ind/user-profile-ind.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HeaderBarComponent,
    UserProfileIndComponent
  ],
  exports: [
    HeaderBarComponent,
    UserProfileIndComponent
  ]
})
export class HeaderModule { }
