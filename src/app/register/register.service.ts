import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(newUser){
    return this.http.post("http://localhost:3500/register", newUser)
  }
  registerAdmin(newUser, token){
    return this.http.post("http://localhost/registerAdmin", {token: token, user: newUser})
  }
}
