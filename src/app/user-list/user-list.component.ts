import { Component, OnInit } from '@angular/core';
import { UserListService } from './user-list.service';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  token: any;
  status: any;
  displayPopUp: any = "none";
  admin: any;
  users: any;
  user: any;

  userForm = new FormGroup({
    _id: new FormControl(''),
    eid: new FormControl(''),
    email: new FormControl(''),
    admin: new FormControl(''),
    token: new FormControl(''),
  })

  constructor(private cookieService: CookieService, private userService: UserListService, private authService: AuthService) { }

  ngOnInit(): void {
    this.token = this.cookieService.get('access-token') 
    this.getUserData();
  }

  async getUserData() {
    this.token = this.cookieService.get('access-token')
    this.admin = await this.authService.verifyAdmin();
    if (this.admin) {
      await this.userService.fetchUsers(this.token).subscribe(data => {this.users = data;});
    } else {
      this.users = "Only for Admins!"
    }
  }

  closeUpdateForm() {
    this.displayPopUp = "none";
  }

  updateForm(userID) {
    this.token = this.cookieService.get('access-token'); 
    this.userService.fetchUser(userID, this.token).subscribe(data => {
      this.user = data;
      this.userForm.controls["eid"].setValue(this.user["eid"]);
      this.userForm.controls["email"].setValue(this.user["email"]);
        
    });
      this.displayPopUp = "block";
  }

  updateUser() {

  }

}
