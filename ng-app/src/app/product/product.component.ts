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

}
