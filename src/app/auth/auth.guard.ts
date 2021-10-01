import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}
  isUser: any;
  isAdmin: any;

  async canActivate() {
    this.isUser = await this.authService.verifyUser();
    if(this.isUser == true){
      console.log('can activate returned true!')
      return true; 
    }else{
      console.log('can activate returned false!')
      this.router.navigate(['login']);
      return false;
    }
  }
}

export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}
  isAdmin: any;
  async canActivate() {
    this.isAdmin = await this.authService.verifyAdmin();
    if(this.isAdmin) {
      console.log("User is Admin");
      return true;
    } else {
      console.log("User is not Admin");
      this.router.navigate(['login']);
      return false;
    }
  }
}



