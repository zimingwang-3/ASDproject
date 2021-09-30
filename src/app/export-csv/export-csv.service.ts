import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExportCsvService {

  constructor(private http: HttpClient) { }

  showUserComplaints(user){
    return this.http.post("http://localhost:3500/fetchComplaints", user);
  }
}
