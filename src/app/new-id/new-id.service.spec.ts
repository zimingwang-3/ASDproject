import { TestBed } from '@angular/core/testing';

import { NewIdService } from './new-id.service';
import {HttpClientModule} from '@angular/common/http';

describe('NewIdService', () => {
  let service: NewIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [NewIdService]
    });
    service = TestBed.inject(NewIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
