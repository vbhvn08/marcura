import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountDisplayComponent } from './amount-display.component';
import {costsResponseMock, exchangeRatesMock} from "../../app.mocks";

describe('AmountDisplayComponent', () => {
  let component: AmountDisplayComponent;
  let fixture: ComponentFixture<AmountDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountDisplayComponent);
    component = fixture.componentInstance;
    component.baseCurrency = costsResponseMock.baseCurrency;
    component.exchange = exchangeRatesMock.paymentCurrencies.find(paymentCurrency => paymentCurrency.toCurrency === 'SGD') as any;
    component.amount = 1500;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
