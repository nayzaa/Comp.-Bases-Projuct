import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductDataServerService} from '../service/product-data-server.service';
import {Route, Router} from '@angular/router';
import {Product} from '../product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product:any={};
  constructor(private productDataServerService : ProductDataServerService,private router:Router) { }

  ngOnInit() {
    this.product = new Product();
  }
  @ViewChild('fileInput') inputEl: ElementRef;
  addProduct(product:Product){
    let result : Product;
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    this.productDataServerService.addProduct(product, inputEl.files.item(0))
      .subscribe(resultProduct => {
        result = resultProduct
        if (result != null) {
          this.router.navigate(['/index']);
        } else {
          alert('Error in adding the student');
        }
      });

  }
  onFileChange(event, product: any) {
    var filename = event.target.files[0].name;
    console.log(filename);
    product.productImage = filename;
  }

}
