import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  header: any;

  constructor(private http: HttpClient) { }

  //login user
  login(user){
    return this.http.post('http://localhost:3500/login', user);
  }
  
  //register user
  async register(user){
    return this.http.post('http://localhost:3500/register', user);
  }

  //verify that tokens are valid
  async verify(AT){ 
    if(!AT) this.header = { "access-token": '' }

    return await this.http.get('http://localhost:4100/verify', { 
      headers: this.header
    }).toPromise();
  }
}
