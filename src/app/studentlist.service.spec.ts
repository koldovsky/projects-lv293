import { TestBed, inject } from '@angular/core/testing';

import { StudentlistService } from './studentlist.service';

describe('StudentlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentlistService]
    });
  });

  it('should be created', inject([StudentlistService], (service: StudentlistService) => {
    expect(service).toBeTruthy();
  }));
});
