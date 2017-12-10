import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductDataServerService} from '../service/product-data-server.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private productDataServerService:ProductDataServerService) {}
  product:Product;

  ngOnInit() {
    this.route.params
      .switchMap((params:Params) => this.productDataServerService.getProductId(+params['id']))
      .subscribe((product:Product) => {
        if (product != null)
          this.product = product;
      });
  }
}
