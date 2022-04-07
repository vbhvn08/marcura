import { ExchangeRatesResolver } from './exchange-rates.resolver';
import {SpectatorService} from "@ngneat/spectator";
import {createServiceFactory, mockProvider} from "@ngneat/spectator/jest";
import {ExchangeRatesService} from "../services/exchange-rates.service";

describe('ExchangeRatesResolver', () => {
  let spectator: SpectatorService<ExchangeRatesResolver>;

  const createService = createServiceFactory({
    service: ExchangeRatesResolver,
    providers: [
      mockProvider(ExchangeRatesService, {
        getExchangeRates: () => {},
      }),
    ],
    entryComponents: [],
    mocks: []
  });

  beforeEach(() => spectator = createService());

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });
});
