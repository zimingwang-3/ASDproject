import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreManageService {

  constructor(private http: HttpClient) { }

  fetchAllStores() {
    return this.http.get("http://localhost:3500/allStores");
  }

  addStore(data) {
    return this.http.post("http://localhost:3500/addStore", data);
  }
}
