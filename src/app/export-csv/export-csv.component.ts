import { Component, OnInit } from '@angular/core';
import { ExportCsvService } from './export-csv.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-export-csv',
  templateUrl: './export-csv.component.html',
  styleUrls: ['./export-csv.component.css']
})
export class ExportCsvComponent implements OnInit {
  complaints: any;
  token: any;
  constructor(private complaintsAPI: ExportCsvService, private cookieService: CookieService) { }

  ngOnInit(): void {
    //HARD CODED VARIABLE (TESTING ONLY)
    this.token = this.cookieService.get('access-token') //"614a4a3bd1bd601ebb61fd59"
    this.complaintsAPI.showUserComplaints({token: this.token}).subscribe(data => this.complaints = data);
  }

  fetchComplaints(user){
    //placeholder
  }

  exportComplaints(complaints){
    //placeholder
  }
}
