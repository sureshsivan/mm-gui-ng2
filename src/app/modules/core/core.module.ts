import {
    NgModule,
    Optional,
    SkipSelf
} from '@angular/core';
import {CommonModule}   from '@angular/common';
import {Headermodule}   from "../header/header.module";
import {FooterModule}   from "../footer/footer.module";

@NgModule({
  imports:[CommonModule, Headermodule, FooterModule],
  exports: [Headermodule, FooterModule]
})
export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('Core module is meant for one time load and must be loaded in App Module - Not anywhere else !!!');
        }
    }
}
