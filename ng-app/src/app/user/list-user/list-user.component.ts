import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserDetail} from '../../user-detail';
import {Account} from '../account';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  result: string;
  account:Account[];
  constructor(private userService:UserService,private route:ActivatedRoute,private router:Router ) { }

  ngOnInit() {
    this.userService.getAccount().subscribe(accounts=>this.account=accounts);

    this.route.queryParams
      .subscribe((params : Params) => {
        this.result = params['result'];
      });
  }
  delete(userdetail : UserDetail){
    let result : UserDetail;
    this.userService.delete(userdetail)
      .subscribe(resultProduct => {
        result = resultProduct
        if (result != null) {
          location.reload();
        } else {
          alert('Error in deleting the user');
        }
      });
  }

}
