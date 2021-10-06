import { TestBed } from '@angular/core/testing';

import { StoreManageService } from './store-manage.service';
import {HttpClientModule} from '@angular/common/http';

describe('StoreManageService', () => {
  let service: StoreManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [StoreManageService]
    });
    service = TestBed.inject(StoreManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
