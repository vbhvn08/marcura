import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCurrency, Exchange, Expense } from '../../interfaces/voyage.types';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

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
  selectedCurrency: string;

  constructor(
    private route: ActivatedRoute,
    private decimalPipe: DecimalPipe
  ) {}

  ngOnInit(): void {
    const costsResponse = this.route.snapshot.data['costs'];
    this.expenses = costsResponse.costs;
    this.baseCurrency = costsResponse.baseCurrency;
    this.daCurrency = costsResponse.daCurrency.currency;
    this.selectedCurrency = this.daCurrency;
    this.exchangeRates =
      this.route.snapshot.data['exchangeRates'].paymentCurrencies;
    console.log(this.expenses);
    console.log(this.exchangeRates);
    this.getCurrencyConversion();
  }

  onCurrencySelect(selectedCurrency: any) {
    this.selectedCurrency = selectedCurrency.target.value;
    this.exchange =
      this.exchangeRates.find(
        (rate) => rate.toCurrency === this.selectedCurrency
      ) || ({} as Exchange);
  }

  getCurrencyConversion(): string {
    const exchangeRate = this.decimalPipe.transform(
      1 / this.baseCurrency?.exchangeRate,
      '1.2-4'
    );
    return `1 ${this.baseCurrency?.currency} = ${exchangeRate} ${this.daCurrency}`;
  }
}
