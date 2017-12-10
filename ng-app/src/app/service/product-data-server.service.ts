import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http,Headers, RequestOptions} from '@angular/http';
import {Product} from '../../product';

@Injectable()
export class ProductDataServerService {

  constructor(private http:Http) { }

  getProduct():Observable<Product[]>{
    return this.http.get('http://localhost:8080/product')
      .map(res => res.json());
  }

  addProduct(product:Product){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers, method: 'post'});
    let body = JSON.stringify(product);
    return this.http.post('http://localhost:8080/product', body, options)
      .map(res => {
        return res.json()
      })
      .catch((error: any) => {
        return Observable.throw(new Error(error.status))
      })

  }
}
