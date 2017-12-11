import { Component, OnInit } from '@angular/core';

import {ProductDataServerService} from '../service/product-data-server.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Product} from "app/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[];
  constructor(private productDataServerService:ProductDataServerService,private route:ActivatedRoute,private router:Router) { }

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
  onSearcgPrice(){
    this.productDataServerService.findPrice(this.low,this.high) .subscribe(products => this.products = products,
      (error  ) => {
        if (error.status===401){

          this.router.navigate(['login'],{queryParams:{source:'student'}});
        }
      });
  }
  // findProductByDescrription(){
  //   this.productDataServerService.findProduct(this.search)
  //     .subscribe(products => this.products = products,
  //       (error  ) => {
  //         if (error.status===401){
  //
  //           this.router.navigate(['login'],{queryParams:{source:'student'}});
  //         }
  //       });
  // }

}
