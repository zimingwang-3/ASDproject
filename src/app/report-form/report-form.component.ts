import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {

  URL = 'http://localhost:3500'

  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(data) {
    this.submitComplaint(data);
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
