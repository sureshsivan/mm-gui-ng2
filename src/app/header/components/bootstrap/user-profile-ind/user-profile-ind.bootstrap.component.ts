import { Component, OnInit } from '@angular/core';
import {User} from '../../../../shared/types/User.type';
import {AuthService} from '../../../../auth/services/Auth.service';

@Component({
  selector: 'mm-boot-user-profile-ind',
  templateUrl: './user-profile-ind.bootstrap.component.html',
  styleUrls: ['./user-profile-ind.bootstrap.component.scss']
})
export class UserProfileIndBootstrapComponent implements OnInit {

  private userFullName = 'Suresh Sivanantham';
  private lastLoggedIn = new Date().getTime() - (1000 * 60 * 60 * 24);

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }
}
