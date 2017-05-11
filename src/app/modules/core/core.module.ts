import {
    NgModule,
    Optional,
    SkipSelf
} from '@angular/core';
import {CommonModule}   from '@angular/common';
import {Headermodule}   from "../header/header.module";
import {FooterModule}   from "../footer/footer.module";


import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  imports:[
    CommonModule,
    BrowserModule,
    // provide root reducer
    // StoreModule.provideStore(null /* get the root reducer here from store module*/),
    // RouterStoreModule.connectRouter(),
    // StoreDevtoolsModule.instrumentOnlyWithExtension(),
    // all the @Effects one by one (aka async actions or epics) auth,
    // EffectsModule.run(null),
    // EffectsModule.run(null),
    Headermodule,
    FooterModule
  ],
  exports: [
    Headermodule,
    FooterModule
  ]
})
export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('Core module is meant for one time load and must be loaded in App Module - Not anywhere else !!!');
        }
    }
}
