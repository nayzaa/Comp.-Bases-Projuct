import { Component, OnInit } from '@angular/core';
import {Item} from '../../item';
import {ProductDataServerService} from '../../service/product-data-server.service';
import {CartService} from '../../service/cart.service';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items: Item[] =[];

  constructor(private productDataServerService : ProductDataServerService,private cartService:CartService,private authenService:AuthenticationService) { }

  ngOnInit() {
    this.items = JSON.parse(localStorage.getItem("cart"))
  }

  update(index:number,amount:number) {
    this.cartService.updateCart(index,amount);
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

  remove(index:number){
    this.cartService.removeItem(index);
    location.reload();
  }

  hasRole(role:string) {
    return this.authenService.hasRole(role);
  }

}
