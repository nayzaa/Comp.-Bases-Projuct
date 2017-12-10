// import { Injectable } from '@angular/core';
// import {Http, RequestOptions,Headers, Response} from "@angular/http";
// // import {Product} from "../product/product";
// import {Observable} from "rxjs/Rx";
// import 'rxjs/add/operator/toPromise';
// @Injectable()
// export class ProductService {
//   private headers = new Headers({ 'Content-Type': 'application/json' });
//   constructor(private http: Http) {
//   }
//
//   getProductData() {
//     let productArray: Product[];
//     return this.http.get('http://localhost:8080/product')
//       .map(res => res.json());
//   }
//
//   getProduct(id: number) {
//     let product: Product;
//     return this.http.get('http://localhost:8080/product/' + id)
//       .map((res: Response) => {
//         if (res) {
//           if (res.status === 200) {
//             return res.json()
//           }
//           if (res.status === 204) {
//             return null;
//           }
//         }
//       })
//       .catch((error: any) => {
//         if (error.status === 500) {
//           return Observable.throw(new Error(error.status));
//         }
//         else if (error.status === 400) {
//           return Observable.throw(new Error(error.status));
//         }
//         else if (error.status === 409) {
//           return Observable.throw(new Error(error.status));
//         }
//         else if (error.status === 406) {
//           return Observable.throw(new Error(error.status));
//         }
//         return error;
//       })
//       ;
//   }
//
//   addProduct(product: Product, file: any) {
//     let formData = new FormData();
//     let fileName: string;
//
//     formData.append('file', file);
//     return this.http.post('http://localhost:8080/product/image', formData)
//       .flatMap(filename => {
//         product.productImage = filename.text();
//         let headers = new Headers({'Content-Type': 'application/json'});
//         let options = new RequestOptions({headers: headers, method: 'post'});
//         let body = JSON.stringify(product);
//         return this.http.post('http://localhost:8080/product', body, options)
//           .map(res => {
//             return res.json()
//           })
//           .catch((error: any) => {
//             return Observable.throw(new Error(error.status))
//           })
//       })
//   }
//   //let headers = new Headers({'Content-Type': 'application/json'});
//   deleteProduct(id: number){
//
//     return this.http.delete("http://localhost:8080/product/" + id).toPromise()
//       .then((res)=>res.json())
//       .catch(this.handleError);
//   }
//
//   private handleError(error: any): Promise<any> {
//     console.error('An error occurred', error);
//     return Promise.reject(error.message || error);
//   }
//
//   updateProduct(product:Product,file?: any){
//     let formData = new FormData();
//     let fileName: string;
//
//     formData.append('file', file);
//     return this.http.put('http://localhost:8080/product/image', formData)
//       .flatMap(filename => {
//         product.productImage = filename.text();
//         let headers = new Headers({'Content-Type': 'application/json'});
//         let options = new RequestOptions({headers: headers, method: 'put'});
//         let body = JSON.stringify(product);
//         return this.http.put('http://localhost:8080/product/'+product.productId, body, options)
//           .map(res => {
//             return res.json();
//           })
//           .catch((error: any) => {
//             return Observable.throw(new Error(error.status))
//           })
//       })
//   }
// }
