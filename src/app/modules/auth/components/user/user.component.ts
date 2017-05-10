import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../../types/User.type";

// import Auth0Lock from 'auth0-lock';
// const Auth0Lock = require('auth0-lock');

@Component({
  selector: 'app-user-auth',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  private isAuthdUser: boolean = false;

  private authdUser: User = null;

  private userFullName:string = "Suresh Sivanantham";
  private lastLoggedIn:number = new Date().getTime() - (1000 * 60 * 60 * 24);

  ngOnInit(): void {
  }

  // lock: Auth0LockStatic = new Auth0Lock("", "");
}
