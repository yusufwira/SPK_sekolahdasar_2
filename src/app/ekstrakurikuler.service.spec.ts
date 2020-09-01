import { TestBed } from '@angular/core/testing';

import { EkstrakurikulerService } from './ekstrakurikuler.service';

describe('EkstrakurikulerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EkstrakurikulerService = TestBed.get(EkstrakurikulerService);
    expect(service).toBeTruthy();
  });
});
