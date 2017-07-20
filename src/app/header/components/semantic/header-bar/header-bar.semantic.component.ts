import {Component, OnInit, ElementRef, AfterViewInit} from '@angular/core';
import {AuthService} from "../../../../auth/services/Auth.service";


declare var $;

@Component({
  selector: 'mm-sem-header-bar',
  templateUrl: './header-bar.semantic.component.html',
  styleUrls: ['./header-bar.semantic.component.scss']
})
export class HeaderBarSemanticComponent implements OnInit, AfterViewInit {


  private appTitleTxt = 'Awesome App';
  constructor(private auth: AuthService, private elRef:ElementRef) { }

  ngOnInit() {

  }
  ngAfterViewInit(): void {
    $(this.elRef.nativeElement.querySelector('.ui.dropdown')).dropdown();
  }

}
