import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-login',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  source = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    //reset login status

    this.route.queryParams.subscribe(
      params => {
        if (params['source'])
          this.source = params['source'];
        else
          this.source = null;
      }
    );
    if (this.source) {
      this.authenticationService.logout();
      this.error = `Please login as customer before use ${this.source} page.`;
    }

    if(this.authenticationService.loggedIn()){
      this.router.navigate(['index']);
    }
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(result => {
        if (result === true) {
          //login success
          if (this.source){
            this.router.navigate(['confirm']);
          }else {
            this.router.navigate(['index']);
          }
        } else {
          //login failed
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      }, error => {
        this.loading = false;
        this.error = error;
      });
  }
}
