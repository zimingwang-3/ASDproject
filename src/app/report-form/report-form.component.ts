import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {

  URL = 'http://localhost:3500'

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  onClickSubmit(data) {
    data.token = this.cookieService.get('access-token');
    this.submitComplaint(data);
  }

  updateIncident(incidentId, update) {
    
  }

  async submitComplaint(data): Promise<void> {
    await fetch(this.URL + '/api/submitComplaint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
}

}
