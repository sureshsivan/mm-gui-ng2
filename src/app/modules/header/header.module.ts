import { NgModule } from '@angular/core';

import {SharedModule} from "../shared/shared.module";
import {TopBarComponent} from "./components/topbar/topbar.component";

@NgModule({
  imports: [SharedModule],
  declarations: [TopBarComponent],
  exports: [TopBarComponent]
})
export class Headermodule { }
