import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../../types/User.type";

// import {AuthService} from "../../services/UserAuth.service";

@Component({
  selector: 'app-user-auth',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  private user: User = null;

  private userFullName:string = "Suresh Sivanantham";
  private lastLoggedIn:number = new Date().getTime() - (1000 * 60 * 60 * 24);

  // constructor(private auth: AuthService){
  //
  // }

  ngOnInit(): void {

  }

  showAuth(){

  }

}
