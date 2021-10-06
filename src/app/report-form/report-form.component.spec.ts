import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFormComponent } from './report-form.component';
import {HttpClientModule} from '@angular/common/http';
import { ReportFormService } from './report-form.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReportFormComponent', () => {
  let component: ReportFormComponent;
  let fixture: ComponentFixture<ReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportFormComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [ReportFormService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
