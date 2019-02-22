import { TestBed } from '@angular/core/testing';

import { RoutevalidateService } from './routevalidate.service';

describe('RoutevalidateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutevalidateService = TestBed.get(RoutevalidateService);
    expect(service).toBeTruthy();
  });
});
