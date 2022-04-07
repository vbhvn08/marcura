import { ExchangeRatesService } from './exchange-rates.service';
import {SpectatorService} from "@ngneat/spectator";
import {createServiceFactory} from "@ngneat/spectator/jest";
import {HttpClient} from "@angular/common/http";

describe('ExchangeRatesService', () => {
  let spectator: SpectatorService<ExchangeRatesService>;

  const createService = createServiceFactory({
    service: ExchangeRatesService,
    providers: [],
    entryComponents: [],
    mocks: [HttpClient]
  });
  beforeEach(() => spectator = createService());

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });
});
