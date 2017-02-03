import {Component, OnInit} from '@angular/core';

declare var $: any

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.showModal = false;
  }
  showModal:boolean = false;
  toggleModal(event:any){
    $('.ui.basic.modal').modal('show');
    console.log(this.showModal);
    this.showModal = (! (this.showModal));
    console.log(this.showModal);
  }
}
