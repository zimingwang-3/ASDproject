import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class RoleService implements CanActivate{

  isAdmin: any;
  constructor(public authService: AuthService, public router: Router) { }

  async canActivate(oute: ActivatedRouteSnapshot): Promise<boolean> {
    
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
