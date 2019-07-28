import { TestBed } from '@angular/core/testing';

import { NachbarIntroService } from './nachbar-intro.service';

describe('NachbarIntroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NachbarIntroService = TestBed.get(NachbarIntroService);
    expect(service).toBeTruthy();
  });
});
