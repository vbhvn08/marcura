import { CostsComponent } from './costs.component';
import {Spectator} from "@ngneat/spectator";
import {createComponentFactory, mockProvider} from "@ngneat/spectator/jest";
import { DecimalPipe} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";

describe('CostsComponent', () => {
  let spectator: Spectator<CostsComponent>;

  const activatedRouteMock = {
    snapshot: { data: {costs: '', exchangeRates: ''} },
    queryParams: of({}),
  };

  const createComponent = createComponentFactory({
    component: CostsComponent,
    declarations: [],
    detectChanges: false,
    providers: [
      mockProvider(DecimalPipe),
      mockProvider(ActivatedRoute, activatedRouteMock),
    ],
  });

  beforeEach(async () => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
