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
