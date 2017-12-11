import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductDataServerService} from '../service/product-data-server.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Product} from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];
  constructor(private productDataServerService:ProductDataServerService,private route:ActivatedRoute,private router:Router) { }
  result:String;
  ngOnInit() {
    this.productDataServerService.getProduct()
      .subscribe(products=>this.products = products);

    this.route.queryParams
      .subscribe((params : Params) => {
        this.result = params['result'];
      });
  }


  edit(product: Product){
    this.router.navigate(['/edit',product.id]);
  }
  delete(product : Product){
    this.productDataServerService.deleteProduct(product.id);
  }

}
