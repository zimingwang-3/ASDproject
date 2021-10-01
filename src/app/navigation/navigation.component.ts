import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  loggedInAdmin: any;
  user: any;

  constructor(private cookieService: CookieService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.isUser();

    this.authService.isUser$.subscribe(u => {
      if(u == true && this.user == false){
        this.isUser(); 
        this.user = true;
      }
    })
  }
    //check if user is logged in
    async isUser(){
      this.user = await this.authService.verifyUser();
      console.log(await this.user);
      if(this.user == true){
        this.user = true; 
      }else{ 
        this.user = false; 
        console.log("user AT is not valid. User logged off.")
      }
    }
    
  logout(){
    this.cookieService.delete('access-token');
    this.user = false;
    this.router.navigate(['/', 'login']);
  }
}
