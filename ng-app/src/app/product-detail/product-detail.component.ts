import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductDataServerService} from '../service/product-data-server.service';
import {CartService} from '../service/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private productDataServerService:ProductDataServerService,private route:ActivatedRoute,private router:Router,private cartService:CartService) { }
  product:Product;

  ngOnInit() {
    this.route.params
      .switchMap((params:Params) => this.productDataServerService.getProductId(+params['id']))
      .subscribe((product:Product) => {
        if (product != null)
          this.product = product;
      });
  }
  addProductToCart(product:Product){
    this.cartService.addProductToCart(product);
    this.router.navigate(['/cart'])
  }
}
