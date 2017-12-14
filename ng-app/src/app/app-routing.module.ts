import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product/product.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {LoginComponent} from './login/login.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductAddComponent} from './product-add/product-add.component';
import {ShoppingCartComponent} from './product/shopping-cart/shopping-cart.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ConfirmCheckoutComponent} from './payment/confirm-checkout/confirm-checkout.component';
import {PaymentComponent} from './payment/payment/payment.component';
import {TranferMoneyComponent} from './payment/tranfer-money/tranfer-money.component';
import {CreditCardComponent} from './payment/paypal/paypal.component';
import {AddShopkeeperComponent} from './add-shopkeeper/add-shopkeeper.component';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {ListUserComponent} from './user/list-user/list-user.component';


const appRoutes:Routes=[
  {path:'index',component:ProductComponent},
  {path:'detail/:id',component:ProductDetailComponent},
  {path:'login',component:LoginComponent},
  {path:'list',component:ProductListComponent},
  {path:'product-add',component:ProductAddComponent},
  {path:'',redirectTo:'/index',pathMatch:'full'},
  {path:'cart',component:ShoppingCartComponent},
  {path:'edit/:id',component:ProductEditComponent},
  {path:'confirm',component:ConfirmCheckoutComponent},
  {path:'payment',component:PaymentComponent},
  {path:'tranfer-money',component:TranferMoneyComponent},
  {path:'credit-card',component:CreditCardComponent},
  {path:'add-shopkeeper',component:AddShopkeeperComponent},
  {path:'register',component:AddCustomerComponent},
  {path:'list-user',component:ListUserComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {
}
