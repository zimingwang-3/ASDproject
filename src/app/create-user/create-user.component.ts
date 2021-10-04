import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  status: any;
  constructor(private api: RegisterService, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  register(newUser){
    const token = this.cookieService.get("access-token");
    this.api.registerAdmin(newUser, token).subscribe(data => this.status = data);
  }

}
