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
  complaint: any;
  token: any;
  status: any;
  reportForm: any;
  displayPopUp: any = "none";

  constructor(private complaintsAPI: ExportCsvService, private cookieService: CookieService) { }

  ngOnInit(): void {
    //HARD CODED VARIABLE (TESTING ONLY)
    this.token = this.cookieService.get('access-token') //"614a4a3bd1bd601ebb61fd59"
    this.complaintsAPI.showUserComplaints({token: this.token}).subscribe(data => this.complaints = data);
  }

  //display the pop up windo
  updateForm(incidentId) {
    this.token = this.cookieService.get('access-token') 
    this.complaintsAPI.fetchUserComplaint(incidentId, this.token).subscribe(data => {
      this.complaint = data;
      console.log(this.complaint);
    } );

    this.displayPopUp = "block";
  }

  updateIncident(update) {
    console.log(this.reportForm);
  }

  //Close the pop up window
  closeUpdateForm() {
    this.displayPopUp = "none";
  }

  deleteIncident(incidentId) {
    console.log(incidentId)
    this.token = this.cookieService.get('access-token')
    this.complaintsAPI.deleteUserComplaint(incidentId, this.token).subscribe(data => this.status = data)
    this.complaintsAPI.showUserComplaints({token: this.token}).subscribe(data => this.complaints = data);
  }

  exportComplaints(complaints){
    //placeholder
  }

}
