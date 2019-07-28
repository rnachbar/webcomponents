import { TestBed } from '@angular/core/testing';

import { Ratify2Service } from './ratify2.service';

describe('Ratify2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ratify2Service = TestBed.get(Ratify2Service);
    expect(service).toBeTruthy();
  });
});
