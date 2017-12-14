import { Component, OnInit } from '@angular/core';

import {ProductDataServerService} from '../service/product-data-server.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Product} from "app/product";
import {CartService} from '../service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[];
  constructor(private productDataServerService:ProductDataServerService,private route:ActivatedRoute,private router:Router,private cartService:CartService) { }

  result:String;
  searchText:string;
  low : number;
  high : number;

  ngOnInit() {
    this.route.queryParams
      .subscribe((params : Params) => {
        this.result = params['result'];
      });

    this.productDataServerService.getProduct()
      .subscribe(products=>this.products = products);


  }
  showDetail(product: Product){
    this.router.navigate(['/detail',product.id]);
  }
  onSearch(){
    this.productDataServerService.findProduct(this.searchText)
      .subscribe(products => this.products = products,
        (error  ) => {
          if (error.status===401){

            this.router.navigate(['login'],{queryParams:{source:'student'}});
          }
        });
  }

  search: string;
  onSearchPrice(){
    this.productDataServerService.findPrice(this.low,this.high) .subscribe(products => this.products = products,
      (error  ) => {
        if (error.status===401){

          this.router.navigate(['login'],{queryParams:{source:'student'}});
        }
      });
  }

  addProductToCart(product:Product){
    this.cartService.addProductToCart(product);
    this.router.navigate(['/cart'])
  }
}
