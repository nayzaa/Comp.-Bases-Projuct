import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private authenService: AuthenticationService
  ) {}


  ngOnInit() {}

  hasRole(role:string) {
    return this.authenService.hasRole(role);
  }
}
