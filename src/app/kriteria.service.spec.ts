import { TestBed } from '@angular/core/testing';

import { KriteriaService } from './kriteria.service';

describe('KriteriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KriteriaService = TestBed.get(KriteriaService);
    expect(service).toBeTruthy();
  });
});
