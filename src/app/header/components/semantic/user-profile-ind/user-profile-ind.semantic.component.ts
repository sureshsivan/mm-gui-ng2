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
  private isEventLinked: boolean = false;

  constructor(private auth: AuthService,
              private elRef: ElementRef) {
  }

  ngOnInit() {
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
