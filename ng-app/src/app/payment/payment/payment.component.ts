import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  constructor() { }
  tranferMoney = true;
  creditCard = true;
  ngOnInit() {
  }
  tranferMoneyFunc(){
    this.tranferMoney = false;
    this.creditCard = true;

  }
  paypalfunc(){
    this.tranferMoney = true;
    this.creditCard = false;

  }

}
