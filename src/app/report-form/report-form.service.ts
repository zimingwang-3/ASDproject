import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportFormService {

  constructor(private http: HttpClient) { }

  updateIncident(id, update, token) {
    return this.http.post("http://localhost:3500/updateIncident", 
    {
      token: token, 
      id: id, 
      update: update
    })
  }
}
