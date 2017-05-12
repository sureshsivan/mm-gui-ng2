import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mm-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
  private appTitleTxt = 'Awesome App';
  constructor() { }

  ngOnInit() {
  }

}
