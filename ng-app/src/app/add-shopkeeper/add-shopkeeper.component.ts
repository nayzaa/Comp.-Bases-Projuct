import { Component, OnInit } from '@angular/core';
import {UserDetail} from '../user-detail';
import {UserService} from '../service/user.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-add-shopkeeper',
  templateUrl: './add-shopkeeper.component.html',
  styleUrls: ['./add-shopkeeper.component.css']
})
export class AddShopkeeperComponent implements OnInit {

  userDetail:any={};

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.userDetail = new UserDetail();
  }

  addShopkeeper(userDetail:UserDetail){
    let result : UserDetail;
    this.userService.addShopkeeper(userDetail)
      .subscribe(resultDetail => {
        result = resultDetail
        if (result != null) {
          this.router.navigate(['/index']);
        } else {
          alert('Error in adding the shopkeeper');
        }
      });
    // this.userService.addShopkeeper(userDetail);
  //  change interface to list
  }
}
