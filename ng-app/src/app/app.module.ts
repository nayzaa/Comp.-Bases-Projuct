import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MenuComponent } from './menu/menu.component';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import {ProductDataServerService} from './service/product-data-server.service';
import {HttpModule} from '@angular/http';
import {AuthenticationService} from './service/authentication.service';
import { ShoppingCartComponent } from './product/shopping-cart/shopping-cart.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ConfirmCheckoutComponent } from './payment/confirm-checkout/confirm-checkout.component';
import { PaymentComponent } from './payment/payment/payment.component';
import { TranferMoneyComponent } from './payment/tranfer-money/tranfer-money.component';
import { CreditCardComponent } from './payment/paypal/paypal.component';
import { AddShopkeeperComponent } from './add-shopkeeper/add-shopkeeper.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';

import { CartViewComponent } from './cart/cart-view/cart-view.component';
import {CartService} from './service/cart.service';
import { ListUserComponent } from './user/list-user/list-user.component';
import {UserService} from './service/user.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MenuComponent,
    HeaderComponent,
    ProductDetailComponent,
    LoginComponent,
    ProductListComponent,
    ProductAddComponent,
    ShoppingCartComponent,
    ProductEditComponent,
    ConfirmCheckoutComponent,
    PaymentComponent,
    TranferMoneyComponent,
    CreditCardComponent,
    AddShopkeeperComponent,
    AddCustomerComponent,
    CartViewComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpModule,FormsModule
  ],
  providers: [ProductDataServerService,AuthenticationService,CartService,UserService],
  bootstrap: [AppComponent,HeaderComponent]
})
export class AppModule { }
