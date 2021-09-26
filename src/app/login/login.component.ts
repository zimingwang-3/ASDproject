import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  URL = 'http://localhost:3500';
  user: any;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  async login(data){
    console.log(data);

    //call login service with user data
    this.loginService.login(data).subscribe(data => this.user = data);
  }

}
