import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  constructor() { }
  tranferMoney = true;
  paypal = true;
  ngOnInit() {
  }
  tranferMoneyFunc(){
    this.tranferMoney = false;
    this.paypal = true;

  }
  paypalfunc(){
    this.tranferMoney = true;
    this.paypal = false;

  }

}
