import { TestBed } from '@angular/core/testing';

import { StoreManageService } from './store-manage.service';

describe('StoreManageService', () => {
  let service: StoreManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
