import {AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {User} from '../../../../shared/types/User.type';
import {AuthService} from '../../../../auth/services/Auth.service';
declare var $;
@Component({
  selector: 'mm-sem-user-profile-ind',
  templateUrl: './user-profile-ind.semantic.component.html',
  styleUrls: ['./user-profile-ind.semantic.component.scss']
})
export class UserProfileIndSemanticComponent implements OnInit, AfterViewInit, AfterViewChecked {

  private notifications: Array<{}>;

  constructor(private auth: AuthService,
              private elRef: ElementRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    var el = $(this.elRef.nativeElement.querySelector('.user-legend'));
    var handler = el.popup({
      inline     : true,
      on  : 'click'
    });
    console.log("ngAfterViewInit", el, handler);
  }

  ngAfterViewChecked(): void {
    console.log("View Checked....");
  }

}
