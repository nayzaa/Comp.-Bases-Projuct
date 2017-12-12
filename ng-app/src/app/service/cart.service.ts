import { Injectable } from '@angular/core';
import {Product} from '../product';
import {Item} from '../item';
import {ProductDataServerService} from './product-data-server.service';

@Injectable()
export class CartService {

  itemInCart: Item[];

  addProductToCart(product:Product){
    if(localStorage.getItem("cart")){
      this.itemInCart = JSON.parse(localStorage.getItem("cart"));
    }else{
      this.itemInCart = [];
    }
    this.itemInCart.push(new Item(product));
    localStorage.setItem("cart",JSON.stringify(this.itemInCart));
  }

  updateCart(index:number,amount:number){
    if(localStorage.getItem("cart")){
      this.itemInCart = JSON.parse(localStorage.getItem("cart"));
      this.itemInCart[index].amount = amount;
      localStorage.setItem("cart",JSON.stringify(this.itemInCart));
    }
  }

  removeItem(index:number){
    if(localStorage.getItem("cart")){
      this.itemInCart = JSON.parse(localStorage.getItem("cart"));
      this.itemInCart.splice(index,1)
      localStorage.setItem("cart",JSON.stringify(this.itemInCart));
    }
  }

  constructor(
    private productDataServerService: ProductDataServerService
  ) { }

}
