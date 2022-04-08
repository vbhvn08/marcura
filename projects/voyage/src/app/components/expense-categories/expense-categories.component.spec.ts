import {ExpenseCategoriesComponent} from './expense-categories.component';
import {byTestId, Spectator} from "@ngneat/spectator";
import {createComponentFactory, mockProvider} from "@ngneat/spectator/jest";
import {CurrencyPipe} from "@angular/common";
import {costsResponseMock, exchangeRatesMock} from "../../app.mocks";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('ExpenseCategoriesComponent', () => {
  let spectator: Spectator<ExpenseCategoriesComponent>;

  const createComponent = createComponentFactory({
    component: ExpenseCategoriesComponent,
    declarations: [],
    detectChanges: false,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
      mockProvider(CurrencyPipe, {
        transform: (key: any) => key
      }),
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.component.expenseCategory = costsResponseMock.costs[0] as any;
    spectator.component.selectedCurrency = 'SGD';
    spectator.component.exchange = exchangeRatesMock.paymentCurrencies.find(paymentCurrency => paymentCurrency.toCurrency === 'SGD') as any;
    spectator.component.baseCurrency = costsResponseMock.baseCurrency;

  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should display cost items', () => {
    spectator.detectChanges();
    const rows = spectator.queryAll(byTestId('cost-item'));
    expect(rows.length).toBe(2);
  });
  it('should display amount in selected currency', () => {
    spectator.detectChanges();
    const amountInSelectedCurrency = spectator.queryAll(byTestId('amount-in-selected-currency'))[0];
    expect(amountInSelectedCurrency).toHaveExactText(' 1500 ');
  });

  it('should display amount in base currency', () => {
    spectator.detectChanges();
    const amountInBaseCurrency = spectator.queryAll(byTestId('amount-in-base-currency'))[0];
    expect(amountInBaseCurrency).toHaveExactText(' 1139.7299638938628 ');
  });

  it('should display total quoted amount in selected currency', () => {
    spectator.detectChanges();
    const amountInSelectedCurrency = spectator.query(byTestId('quoted-total-in-selected-currency'));
    expect(amountInSelectedCurrency).toHaveExactText('6900');
  });

  it('should display total quoted amount in base currency', () => {
    spectator.detectChanges();
    const amountInBaseCurrency = spectator.query(byTestId('quoted-total-in-base-currency'));
    expect(amountInBaseCurrency).toHaveExactText(' 5242.757833911768 ');
  });
});
