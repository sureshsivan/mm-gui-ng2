import { NgModule } from '@angular/core';

import {SharedModule} from "../shared/shared.module";
import {UserComponent} from "./components/user/user.component";
import {CommonModule} from "@angular/common";
import {AuthService} from "./services/UserAuth.service";

@NgModule({
  imports: [CommonModule],
  declarations: [UserComponent],
  exports: [UserComponent],
  providers: [AuthService]
})
export class AuthModule { }
