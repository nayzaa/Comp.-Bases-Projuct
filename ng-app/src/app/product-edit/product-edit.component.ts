import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from '../product';
import {ProductDataServerService} from '../service/product-data-server.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product:any={};
  constructor(private productDataServerService:ProductDataServerService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.product = new Product();
    this.route.params
      .switchMap((params:Params) => this.productDataServerService.getProductId(+params['id']))
      .subscribe((product:Product) => {
        if (product != null)
          this.product = product;
      });
  }
  @ViewChild('fileInput') inputEl: ElementRef;
  onFileChange(event, product: any) {
    var filename = event.target.files[0].name;
    console.log(filename);
    product.productImage = filename;
  }
  edit(product:Product){
    let result : Product;
    this.productDataServerService.editProduct(product)
      .subscribe(resultProduct => {
        result = resultProduct
        if (result != null) {
          this.router.navigate(['/list']);
        } else {
          alert('Error in adding the product');
        }
      });

  }

}
