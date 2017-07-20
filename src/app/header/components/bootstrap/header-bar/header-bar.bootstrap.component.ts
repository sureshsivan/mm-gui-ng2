import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mm-boot-header-bar',
  templateUrl: './header-bar.bootstrap.component.html',
  styleUrls: ['./header-bar.bootstrap.component.scss']
})
export class HeaderBarBootstrapComponent implements OnInit {
  private appTitleTxt = 'Awesome App';
  constructor() { }

  ngOnInit() {
  }

}
