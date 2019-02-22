import { TestBed } from '@angular/core/testing';

import { TestresolverService } from './testresolver.service';

describe('TestresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestresolverService = TestBed.get(TestresolverService);
    expect(service).toBeTruthy();
  });
});
