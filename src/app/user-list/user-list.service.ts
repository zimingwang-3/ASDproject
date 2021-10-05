import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http: HttpClient) { }

  fetchUsers(token) {
    return this.http.post('http://localhost:3500/getAllUsers', {token: token});
  }
}
