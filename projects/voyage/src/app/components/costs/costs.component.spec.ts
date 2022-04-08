import { CostsComponent } from './costs.component';
import {byTestId, Spectator} from "@ngneat/spectator";
import {createComponentFactory, mockProvider} from "@ngneat/spectator/jest";
import { DecimalPipe} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";
import {costsResponseMock, exchangeRatesMock} from "../../app.mocks";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('CostsComponent', () => {
  let spectator: Spectator<CostsComponent>;

  const activatedRouteMock = {
    snapshot: { data: {costs: costsResponseMock, exchangeRates: exchangeRatesMock} },
    queryParams: of({}),
  };

  const createComponent = createComponentFactory({
    component: CostsComponent,
    declarations: [],
    detectChanges: false,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
      mockProvider(DecimalPipe, {
        transform: (key: any) => key
      }),
      mockProvider(ActivatedRoute, activatedRouteMock),
    ],
  });

  beforeEach(async () => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should display expense categories', () => {
    spectator.detectChanges();
    const rows = spectator.queryAll('app-expense-categories');
    expect(rows.length).toBe(2);
  });

  it('should select currency dropdown to daCurrency', () => {
    spectator.detectChanges();
    expect(spectator.component.selectedCurrency).toBe('SGD');
  });

  it('should show currency conversion value', () => {
    spectator.detectChanges();
    const currencyConversionText = spectator.queryAll(byTestId('currency-conversion'));
    console.log(currencyConversionText);
    expect(currencyConversionText).toHaveExactText('1 USD = 1.3161012235523601 SGD');
  });
});
