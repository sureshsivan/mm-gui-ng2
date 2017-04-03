import { NgModule } from '@angular/core';

import {SharedModule} from "../shared";
import {BannerComponent} from "./components/banner.component";

@NgModule({
  declarations: [BannerComponent],
  imports: [SharedModule],
  exports: [BannerComponent]
})
export class BannerModule { }
