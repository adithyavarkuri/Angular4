import { TestBed, async, inject } from '@angular/core/testing';

import { RoutingguardGuard } from './routingguard.guard';

describe('RoutingguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutingguardGuard]
    });
  });

  it('should ...', inject([RoutingguardGuard], (guard: RoutingguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
