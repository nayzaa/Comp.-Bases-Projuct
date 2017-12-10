import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MenuComponent,
    HeaderComponent,
    ProductDetailComponent,
    LoginComponent,
    ProductListComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpModule
  ],
  providers: [ProductDataServerService],
  bootstrap: [AppComponent,HeaderComponent]
})
export class AppModule { }
