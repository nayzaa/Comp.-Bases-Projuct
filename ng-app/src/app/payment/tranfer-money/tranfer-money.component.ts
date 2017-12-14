import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SlipImage} from './slip';
import {Router} from '@angular/router';
import {ProductDataServerService} from '../../service/product-data-server.service';

@Component({
  selector: 'app-tranfer-money',
  templateUrl: './tranfer-money.component.html',
  styleUrls: ['./tranfer-money.component.css']
})
export class TranferMoneyComponent implements OnInit {
  slip: any={};
  constructor(private productDataServerService:ProductDataServerService,private router:Router) { }

  ngOnInit() {
  }
  @ViewChild('fileInput') inputEl: ElementRef;
  addSlip(slip:SlipImage){
    let result : SlipImage;
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    this.productDataServerService.addSlip(slip, inputEl.files.item(0))
      .subscribe(resultProduct => {
        result = resultProduct
        if (result != null) {
          this.router.navigate(['index']);
          alert("Add slip complete");
        } else {
          alert('Error in adding the slip');
        }
      });



  }
  onFileChange(event, slip: any) {
    var filename = event.target.files[0].name;
    console.log(filename);
    slip.image = filename;
    slip.file = event.target.files[0];
  }

}
