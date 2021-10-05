import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreManageService {

  constructor(private http: HttpClient) { }

  fetchAllStores(token) {
    return this.http.post("http://localhost:3500/allStores", {token: token});
  }

  addStore(data, token) {
    data.token = token;
    return this.http.post("http://localhost:3500/addStore", data);
  }

  deleteStore(data, token) {
    data.token = token;
    return this.http.post("http://localhost:3500/deleteStore", data);
  }
}
