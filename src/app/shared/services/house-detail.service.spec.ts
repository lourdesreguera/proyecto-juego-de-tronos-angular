import { TestBed } from '@angular/core/testing';

import { HouseDetailService } from './house-detail.service';

describe('HouseDetailService', () => {
  let service: HouseDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HouseDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
