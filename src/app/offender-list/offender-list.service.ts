import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffenderListService {

  constructor(private http: HttpClient) { }

  getAllOffenders(token) {
    return this.http.post("http://localhost:3500/findAllOffenders", {token: token});
  }
}
