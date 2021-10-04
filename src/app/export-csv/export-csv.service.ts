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

  fetchUserComplaint(complaintId, token) {
    return this.http.post("http://localhost:3500/fetchComplaint", {complaintId: complaintId, token: token})
  }

  updateIncident(id, update, token) {
    return this.http.post("http://localhost:3500/updateIncident", 
    {
      token: token, 
      id: id, 
      update: update
    })
  }

  deleteUserComplaint(complaintId, token){
    return this.http.post('http://localhost:3500/deleteComplaint', {complaintId: complaintId, token: token})
  }
}
