import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountEditableComponent } from './amount-editable.component';
import {costsResponseMock, exchangeRatesMock} from "../../app.mocks";

describe('AmountEditableComponent', () => {
  let component: AmountEditableComponent;
  let fixture: ComponentFixture<AmountEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountEditableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountEditableComponent);
    component = fixture.componentInstance;
    component.baseCurrency = costsResponseMock.baseCurrency;
    component.exchange = exchangeRatesMock.paymentCurrencies.find(paymentCurrency => paymentCurrency.toCurrency === 'SGD') as any;
    component.inputAmount = 1500;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
