import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCurrency, Exchange, Expense } from '../../interfaces/voyage.types';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.scss'],
})
export class CostsComponent implements OnInit {
  expenses: Expense[] = [];
  exchange: Exchange;
  exchangeRates: Exchange[] = [];
  daCurrency: string = '';
  baseCurrency: BaseCurrency;

  constructor(
    private route: ActivatedRoute,
    private decimalPipe: DecimalPipe
  ) {}

  ngOnInit(): void {
    const costsResponse = this.route.snapshot.data['costs'];
    this.expenses = costsResponse.costs;
    this.baseCurrency = costsResponse.baseCurrency;
    this.daCurrency = costsResponse.daCurrency.currency;
    this.exchangeRates =
      this.route.snapshot.data['exchangeRates'].paymentCurrencies;
    this.setExchange(this.daCurrency);
  }

  onCurrencySelect(selectedCurrency: any) {
    this.setExchange(selectedCurrency.target.value);
  }

  setExchange(selectedCurrency: string) {
    this.exchange = this.exchangeRates.find(
      (rate) => rate.toCurrency === selectedCurrency
    ) || ({} as Exchange);
  }

  getCurrencyConversion(): string {
    const exchangeRate = (this.exchange?.exchangeRate || 1) / this.baseCurrency?.exchangeRate;
    const transformRate = this.decimalPipe.transform(
      exchangeRate,
      '1.2-4'
    );
    return `1 ${this.baseCurrency?.currency} = ${transformRate} ${this.exchange.toCurrency}`;
  }
}
