import { Injectable } from '@angular/core';
import {Product} from '../product';
import {Item} from '../item';
import {ProductDataServerService} from './product-data-server.service';

@Injectable()
export class CartService {

  itemInCart: Item[] =[];

  addProductToCart(productId:number){
    this.itemInCart.push(new Item(productId));
    localStorage.setItem("cart",JSON.stringify(Item));
  }

  constructor(
    private productDataServerService: ProductDataServerService
  ) { }

}
