import { Component, OnInit } from '@angular/core';
import {Item} from '../../item';

@Component({
  selector: 'app-confirm-checkout',
  templateUrl: './confirm-checkout.component.html',
  styleUrls: ['./confirm-checkout.component.css']
})
export class ConfirmCheckoutComponent implements OnInit {

  items: Item[] =[];

  constructor() { }

  ngOnInit() {
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
}
