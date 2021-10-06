import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateOffenderService {
  constructor(private http: HttpClient) { }

  createOffender(offender){
    return this.http.post("http://localhost:3500/createOffender", offender)
  }
}
