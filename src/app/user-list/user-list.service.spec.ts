import { TestBed } from '@angular/core/testing';

import { UserListService } from './user-list.service';
import {HttpClientModule} from '@angular/common/http';

describe('UserListService', () => {
  let service: UserListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UserListService]
    });
    service = TestBed.inject(UserListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
