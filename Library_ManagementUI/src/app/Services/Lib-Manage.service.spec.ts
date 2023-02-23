import { TestBed } from '@angular/core/testing';

import { LibManageService } from './Lib-Manage.service';

describe('BookServiceService', () => {
  let service: LibManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
