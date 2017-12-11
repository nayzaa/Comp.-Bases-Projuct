import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http,Headers, RequestOptions,Response} from '@angular/http';
import {Product} from '../product';
import {reject} from 'q';

@Injectable()
export class ProductDataServerService {

  constructor(private http:Http) { }

  getProduct():Observable<Product[]>{
    return this.http.get('http://localhost:8080/product')
      .map(res => res.json());
  }

  addProduct(product:Product,file:any):Observable<Product>{
    const  formData = new FormData();
    let fileName : string;
    formData.append('file',file);
    return this.http.post('http://localhost:8080/upload/product',formData).flatMap(fileName=>{
      product.productImage = fileName.text();
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
    })


  }

  getProductId(id: number) {
    let product:Product;
    return this.http.get('http://localhost:8080/product/'+id)
      .map((res:Response) => {
        if (res){
          if (res.status === 200){
            return res.json();
          }
          if (res.status === 204){
            return null;
          }
        }
      });
  }
  deleteProduct(id: number){
    // return this.http.post("http://localhost:8080/product/delete/"+id).toPromise()
    //   .then((res)=>res.json())
    //   .catch(this.handleError);
    let headers = new Headers();
    let options = new RequestOptions({headers: headers, method: 'post'});
    return this.http.post('http://localhost:8080/product/delete/'+id, options)
      .map(res => {
        return res.json()
      })
      .catch((error: any) => {
        return Observable.throw(new Error(error.status))
      })
  }


  private handleError(error:any):Promise<any>{
    console.error('Ah error occurred',error);
    return Promise.reject(error.message || error);
  }

  editProduct(product:Product,file:any):Observable<Product>{
    const  formData = new FormData();
    let fileName : string;
    formData.append('file',file);
    return this.http.post('http://localhost:8080/upload/product',formData).flatMap(fileName=>{
      product.productImage = fileName.text();
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
    })


  }


}
