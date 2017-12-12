import {Product} from './product';

export class Item {
  product:Product;
  amount:number;

  constructor(product:Product){
    this.product = product;
    this.amount = 1;
  }
}
