import { TestBed } from '@angular/core/testing';

import { SekolahService } from './sekolah.service';

describe('SekolahService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SekolahService = TestBed.get(SekolahService);
    expect(service).toBeTruthy();
  });
});
