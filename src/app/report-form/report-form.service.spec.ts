import { TestBed } from '@angular/core/testing';

import { ReportFormService } from './report-form.service';
import {HttpClientModule} from '@angular/common/http';

describe('ReportFormService', () => {
  let service: ReportFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ReportFormService]
    });
    service = TestBed.inject(ReportFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
