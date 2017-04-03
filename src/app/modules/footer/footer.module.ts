import { NgModule } from '@angular/core';

import {SharedModule} from "../shared";
import {FooterComponent} from "./components/footer.component";

@NgModule({
  imports: [SharedModule],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule { }
