import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserListService {

  user: any;

  constructor(private http: HttpClient) { }

  fetchUsers(token) {
    return this.http.post('http://localhost:3500/getAllUsers', {token: token});
  }

  fetchUser(userID, token) {
    this.user = {
      _id: userID,
      token: token
    }
    return this.http.post('http://localhost:3500/findUser', this.user);
  }
}
