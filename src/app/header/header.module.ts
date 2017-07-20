import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarBootstrapComponent } from './components/bootstrap/header-bar/header-bar.bootstrap.component';
import { UserProfileIndBootstrapComponent } from './components/bootstrap/user-profile-ind/user-profile-ind.bootstrap.component';

import {SharedModule} from '../shared/shared.module';
import {HeaderBarSemanticComponent} from "./components/semantic/header-bar/header-bar.semantic.component";
import {UserProfileIndSemanticComponent} from "./components/semantic/user-profile-ind/user-profile-ind.semantic.component";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HeaderBarBootstrapComponent,
    UserProfileIndBootstrapComponent,
    HeaderBarSemanticComponent,
    UserProfileIndSemanticComponent
  ],
  exports: [
    HeaderBarBootstrapComponent,
    UserProfileIndBootstrapComponent,
    HeaderBarSemanticComponent,
    UserProfileIndSemanticComponent
  ]
})
export class HeaderModule { }
