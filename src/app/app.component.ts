import {Component, OnInit, ViewEncapsulation} from '@angular/core';

declare var $: any

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    // this.showModal = false;
  }
}
