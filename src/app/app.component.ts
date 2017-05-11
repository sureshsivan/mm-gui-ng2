import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from "./modules/auth/services/UserAuth.service";

declare var $: any

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{

  constructor(public auth: AuthService){
    auth.handleAuthentication();
  }

  ngOnInit(): void {
    // this.showModal = false;
  }
}
