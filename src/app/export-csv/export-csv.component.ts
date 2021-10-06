import { Component, OnInit } from '@angular/core';
import { ExportCsvService } from './export-csv.service';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';


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
  displayPopUp: any = "none";

  reportForm = new FormGroup({
    dateOfComp: new FormControl(''),
    fName: new FormControl(''),
    lName: new FormControl(''),
    email: new FormControl(''),
    sAddress: new FormControl(''),
    sAddress2: new FormControl(''),
    city: new FormControl(''),
    region: new FormControl(''),
    pCode: new FormControl(''),
    sLocation: new FormControl(''),
    date: new FormControl(''),
    name: new FormControl(''), //INCIDENT LOCATION
    compDetails: new FormControl(''),
    desiredOutcome: new FormControl(''),
    signature: new FormControl(''),
  })

  constructor(private complaintsAPI: ExportCsvService, private cookieService: CookieService, private authService: AuthService) { }

  admin;

  ngOnInit(): void {
    //HARD CODED VARIABLE (TESTING ONLY)
    this.token = this.cookieService.get('access-token') //"614a4a3bd1bd601ebb61fd59"
    this.getFormData();
  }

  async getFormData() {
    this.token = this.cookieService.get('access-token')
    this.admin = await this.authService.verifyAdmin();
    if (this.admin) {
      this.complaintsAPI.showAllComplaints(this.token).subscribe(data => this.complaints = data);
    } else {
      this.complaintsAPI.showUserComplaints({token: this.token}).subscribe(data => this.complaints = data);
    }
  }

  //display the pop up windo
  updateForm(incidentId) {
    this.token = this.cookieService.get('access-token') 
    this.complaintsAPI.fetchUserComplaint(incidentId, this.token).subscribe(data => {
      this.complaint = data;

      for(var property in this.complaint){
        //continue loop if property is equal to id, user or userId.
        if(['_id', 'user', 'userId'].includes(property)) continue;
        
        //loop data over to the form
        this.reportForm.controls[property].setValue(this.complaint[property]);
        //console.log("property = ", property, "Value in property = ", this.reportForm.controls[property].value)
      }
    });

    this.displayPopUp = "block";
  }

  updateIncident() {
    this.token = this.cookieService.get('access-token') 
    this.complaintsAPI.updateIncident(this.token, this.complaint._id, this.reportForm.value)
                      .subscribe(data => this.status = data);
  }

  //Close the pop up window
  closeUpdateForm() {
    this.displayPopUp = "none";
  }

  deleteIncident(incidentId) {
    console.log(incidentId)
    this.token = this.cookieService.get('access-token')
    this.complaintsAPI.deleteUserComplaint(incidentId, this.token).subscribe(data => this.status = data)
    this.getFormData();
  }

  exportComplaints(){
    var x = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Incident List',
      useBom: true,
      headers: ["id","Date of incident",	"Name",	"Email",	"Store location",	"Store name",
      	"Date of incident", "incident location", "Complaint details",	"Desired outcome"]
    };
   
    new ngxCsv(this.reportForm, "IncidentList", x);
     }
  
}
