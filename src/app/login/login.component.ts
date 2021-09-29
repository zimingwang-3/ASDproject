import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  URL = 'http://localhost:3500';
  user: any;
  constructor(private authService: AuthService, private loginService: LoginService, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  async login(data){
    console.log(data);

    //call login service with user data
    this.loginService.login(data).subscribe(data => {
      this.user = data;
      this.cookieService.set('access-token', this.user.AT);

      console.log(this.user.AT)
      if(this.user.AT){
        console.log(this.user.AT)
        this.authService.verifyUser();
        this.router.navigate(['csv']);
        //update user login status
        this.authService.verifyUser();
      } 
    });
  }

}
