import { NgModule } from '@angular/core';

import {SharedModule} from "../shared/shared.module";
import {UserComponent} from "./components/user/user.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [UserComponent],
  exports: [UserComponent]
})
export class AuthModule { }
