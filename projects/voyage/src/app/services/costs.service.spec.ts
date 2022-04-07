import { CostsService } from './costs.service';
import {SpectatorService} from "@ngneat/spectator";
import {createServiceFactory} from "@ngneat/spectator/jest";
import {HttpClient} from "@angular/common/http";

describe('CostsService', () => {
  let spectator: SpectatorService<CostsService>;

  const createService = createServiceFactory({
    service: CostsService,
    providers: [],
    entryComponents: [],
    mocks: [HttpClient]
  });
  beforeEach(() => spectator = createService());

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });
});
