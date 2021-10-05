import { Component, OnInit } from '@angular/core';
import { OffenderListService } from './offender-list.service';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-offender-list',
  templateUrl: './offender-list.component.html',
  styleUrls: ['./offender-list.component.css']
})
export class OffenderListComponent implements OnInit {
  token: any;
  status: any;
  displayPopUp: any = "none";
  admin: any;
  offenders: any;

  constructor(private cookieService: CookieService, private offenderService: OffenderListService, private authService: AuthService) { }

  ngOnInit(): void {
    this.token = this.cookieService.get('access-token')
    this.getOffenders();
  }

  async getOffenders() {
    this.token = this.cookieService.get('access-token')
    //this.admin = await this.authService.verifyAdmin();
    await this.offenderService.getAllOffenders(this.token).subscribe(data => {this.offenders = data; console.log(data);});

  }

}
