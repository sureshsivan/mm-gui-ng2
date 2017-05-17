import { Component } from '@angular/core';
import {AuthService} from './auth/services/Auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(public auth: AuthService) {
    // auth.handleAuthentication();
    auth.handleAuthenticationWithHash();
  }

}
