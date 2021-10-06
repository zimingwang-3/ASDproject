import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportCsvComponent } from './export-csv.component';
import {HttpClientModule} from '@angular/common/http';
import { ExportCsvService } from './export-csv.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ExportCsvComponent', () => {
  let component: ExportCsvComponent;
  let fixture: ComponentFixture<ExportCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportCsvComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [ExportCsvService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
