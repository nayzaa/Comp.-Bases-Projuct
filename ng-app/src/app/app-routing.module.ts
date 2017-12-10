import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product/product.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {LoginComponent} from './login/login.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductAddComponent} from './product-add/product-add.component';


const appRoutes:Routes=[
  {path:'index',component:ProductComponent},
  {path:'detail',component:ProductDetailComponent},
  {path:'login',component:LoginComponent},
  {path:'list',component:ProductListComponent},
  {path:'product-add',component:ProductAddComponent},
  {path:'',redirectTo:'/index',pathMatch:'full'},
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
