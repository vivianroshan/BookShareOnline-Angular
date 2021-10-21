import { TestBed } from '@angular/core/testing';

import { SellGuard } from './sell.guard';

describe('SellGuard', () => {
  let guard: SellGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SellGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
