import { TestBed } from '@angular/core/testing';

import { SpkService } from './spk.service';

describe('SpkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpkService = TestBed.get(SpkService);
    expect(service).toBeTruthy();
  });
});
