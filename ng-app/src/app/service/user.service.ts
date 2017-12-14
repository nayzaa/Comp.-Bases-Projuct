import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UserDetail} from '../user-detail';
import {Http,Headers, RequestOptions,Response} from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http:Http) { }


  addShopkeeper(userDetail:UserDetail){
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers, method: 'post'});
      let body = JSON.stringify(userDetail);
      return this.http.post('http://localhost:8080/account/create/shopkeeper', body, options)
        .map(res => {
          return res.json()
        })
        .catch((error: any) => {
          return Observable.throw(new Error(error.status))
        })
    }

  delete(userDetail:UserDetail){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers, method: 'post'});
    let body = JSON.stringify(userDetail);
    return this.http.post('http://localhost:8080/account/delete', body, options)
      .map(res => {
        return res.json()
      })
      .catch((error: any) => {
        return Observable.throw(new Error(error.status))
      })
  }

  getAccount():Observable<Account[]>{
    return this.http.get('http://localhost:8080/account')
      .map(res => res.json());
  }
}
