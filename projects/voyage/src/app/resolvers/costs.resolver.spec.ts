import { CostsResolver } from './costs.resolver';
import {SpectatorService} from "@ngneat/spectator";
import {createServiceFactory, mockProvider} from "@ngneat/spectator/jest";
import {CostsService} from "../services/costs.service";

describe('CostsResolver', () => {
  let spectator: SpectatorService<CostsResolver>;

  const createService = createServiceFactory({
    service: CostsResolver,
    providers: [
      mockProvider(CostsService, {
        getCosts: () => {},
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
