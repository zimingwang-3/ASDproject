import { Component, OnInit } from '@angular/core';
import { offenders } from './offenders';

@Component({
  selector: 'app-offender-list',
  templateUrl: './offender-list.component.html',
  styleUrls: ['./offender-list.component.css']
})
export class OffenderListComponent implements OnInit {
  offenders = offenders;

  constructor() { }

  ngOnInit(): void {
  }

}
