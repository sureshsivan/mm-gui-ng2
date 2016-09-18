import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app/app.component';
import { HeaderComponent } from './header/Header.component'
@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }