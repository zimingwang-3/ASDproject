import { TestBed } from '@angular/core/testing';

import { ExportCsvService } from './export-csv.service';
import {HttpClientModule} from '@angular/common/http';

describe('ExportCsvService', () => {
  let service: ExportCsvService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ExportCsvService]
    });
    service = TestBed.inject(ExportCsvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
