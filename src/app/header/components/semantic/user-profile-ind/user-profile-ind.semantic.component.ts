import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {User} from '../../../../shared/types/User.type';
import {AuthService} from '../../../../auth/services/Auth.service';
declare var $;
@Component({
  selector: 'mm-sem-user-profile-ind',
  templateUrl: './user-profile-ind.semantic.component.html',
  styleUrls: ['./user-profile-ind.semantic.component.scss']
})
export class UserProfileIndSemanticComponent implements OnInit, AfterViewInit {

  private userFullName = 'Suresh Sivanantham';
  private lastLoggedIn = new Date().getTime() - (1000 * 60 * 60 * 24);

  constructor(private auth: AuthService, private elRef: ElementRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    $(this.elRef.nativeElement.querySelector('.user-legend')).popup({
      inline     : true,
      on  : 'click'
    });
  }
}
