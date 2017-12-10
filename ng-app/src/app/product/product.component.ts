import { Component, OnInit } from '@angular/core';
import {Product} from '../../product';
import {ProductDataServerService} from '../service/product-data-server.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[]
  constructor(private productDataServerService:ProductDataServerService,private route:ActivatedRoute) { }

  result:String;

  ngOnInit() {
    this.route.queryParams
      .subscribe((params : Params) => {
        this.result = params['result'];
      });

    this.productDataServerService.getProduct()
      .subscribe(products=>this.products = products);
  }

}
