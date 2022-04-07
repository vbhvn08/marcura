import { TestBed } from '@angular/core/testing';

import { ExchangeRatesResolver } from './exchage-rates.resolver';

describe('ExchageRatesResolver', () => {
  let resolver: ExchangeRatesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ExchangeRatesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
