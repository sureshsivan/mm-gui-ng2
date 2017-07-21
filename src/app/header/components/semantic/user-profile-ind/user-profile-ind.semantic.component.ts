import {AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {User} from '../../../../shared/types/User.type';
import {AuthService} from '../../../../auth/services/Auth.service';
import {Notification} from "../../../../shared/types/Notification.type";
declare var $;
@Component({
  selector: 'mm-sem-user-profile-ind',
  templateUrl: './user-profile-ind.semantic.component.html',
  styleUrls: ['./user-profile-ind.semantic.component.scss']
})
export class UserProfileIndSemanticComponent implements OnInit, AfterViewInit, AfterViewChecked {

  private notifications: Array<Notification>;
  private currentNotificationIndex: number = 0;
  private isEventLinked: boolean = false;

  constructor(private auth: AuthService,
              private elRef: ElementRef) {
  }

  ngOnInit() {
    this.notifications = [];
    this.notifications.push(new Notification("Test Subject 1", "short message 1", false, 0, 0));
    this.notifications.push(new Notification("Test Subject 2", "short message 2", false, 0, 0));
    this.notifications.push(new Notification("Test Subject 3", "long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1long message 1", false, 0, 0));
  }

  ngAfterViewInit(): void {
  }

  ngAfterViewChecked(): void {
    var userLegendEl = this.elRef.nativeElement.querySelector('.user-legend');
    if(userLegendEl && !this.isEventLinked){
      $(userLegendEl).popup({
        inline     : true,
        on  : 'click'
      });
      this.isEventLinked = true;
    }
  }

}
