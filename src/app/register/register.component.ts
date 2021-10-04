import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  status: any;
  constructor(private api: RegisterService) { }

  ngOnInit(): void {
  }

  register(newUser){
    console.log(newUser);
    this.api.register(newUser).subscribe(data => this.status = data);
  }

}
