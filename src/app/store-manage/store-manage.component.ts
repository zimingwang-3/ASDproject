import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { StoreManageService } from './store-manage.service';

@Component({
  selector: 'app-store-manage',
  templateUrl: './store-manage.component.html',
  styleUrls: ['./store-manage.component.css']
})
export class StoreManageComponent implements OnInit {
  displayPopUp1: any = "none"
  displayPopUp2: any = "none"
  centres: any;
  token: any;
  status: any;

  addForm = new FormGroup({
    sCentre: new FormControl(''),
    sName: new FormControl(''),
    sLocation: new FormControl(''),
    sNumber: new FormControl(''),
  })

  deleteForm = new FormGroup({
    del: new FormControl(''),
    
  })

  constructor(private cookieService: CookieService, private storeService: StoreManageService) { }

  ngOnInit(): void {
    this.token = this.cookieService.get('access-token')
    this.getData();
  }

  async getData() {
    this.token = this.cookieService.get('access-token')
    this.storeService.fetchAllStores(this.token).subscribe(data => this.centres = data);
  }

  addStore() {
    this.displayPopUp1 = "block";
    this.getData();
  }

  deleteStore() {
    this.displayPopUp2 = "block"
    this.getData();
  }

  addStoreSubmit() {
    this.token = this.cookieService.get('access-token')
    this.storeService.addStore({store: this.addForm.value}, this.token).subscribe(data => this.status = data);
  }

  deleteStoreSubmit() {

  }

  closeUpdateForm1() {
    this.displayPopUp1 = "none";
  }

  closeUpdateForm2() {
    this.displayPopUp2 = "none";
  }
}
