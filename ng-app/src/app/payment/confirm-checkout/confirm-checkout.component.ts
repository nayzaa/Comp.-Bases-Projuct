import { Component, OnInit } from '@angular/core';
import {Item} from '../../item';
import {AuthenticationService} from "app/service/authentication.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-confirm-checkout',
  templateUrl: './confirm-checkout.component.html',
  styleUrls: ['./confirm-checkout.component.css']
})
export class ConfirmCheckoutComponent implements OnInit {

  items: Item[] =[];

  constructor(private authenService: AuthenticationService,private router:Router) { }

  ngOnInit() {
    if(!this.hasRole("CUSTOMER")){
      this.router.navigate(['login'],{queryParams:{source:'checkout'}});
    }
    this.items = JSON.parse(localStorage.getItem("cart"))
  }

  sum() {
    let sum = 0;
    if (Array.isArray(this.items)) {
      for (let item of this.items) {
        sum += item.product.productPrice * item.amount;
      }
      return sum;
    } else {
      return null;
    }
  }

  hasRole(role:string) {
    return this.authenService.hasRole(role);
  }
}
