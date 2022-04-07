import { Component, Input, OnInit } from '@angular/core';
import {
  BaseCurrency,
  CostType,
  Exchange,
  Expense,
} from '../../interfaces/voyage.types';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-expense-categories',
  templateUrl: './expense-categories.component.html',
  styleUrls: ['./expense-categories.component.scss'],
})
export class ExpenseCategoriesComponent implements OnInit {
  @Input()
  expenseCategory: Expense = {} as Expense;
  @Input()
  selectedCurrency: string;
  @Input()
  exchange: Exchange;
  @Input()
  baseCurrency: BaseCurrency;

  totalQuoted: number = 0;
  totalScreened: number = 0;

  constructor(private currencyPipe: CurrencyPipe) {}

  ngOnInit(): void {
    this.calculateTotal();
  }

  getAmountInSelectedCurrency(amount: number): string {
    const convertedAmount = amount * (this.exchange?.exchangeRate || 1);
    return (
      this.currencyPipe.transform(
        convertedAmount,
        this.selectedCurrency,
        'code',
        '1.2-2'
      ) || '-'
    );
  }

  getAmountInBaseCurrency(amount: number): string {
    const convertedAmount = amount * this.baseCurrency.exchangeRate || 1;
    return (
      this.currencyPipe.transform(
        convertedAmount,
        this.baseCurrency.currency,
        'code',
        '1.2-2'
      ) || '-'
    );
  }

  calculateTotal() {
    this.expenseCategory.costItems.map((costItem) => {
      const quotedAmount = costItem.costs.find(
        (cost) => cost.type === CostType.Quoted
      )?.amount;
      this.totalQuoted += quotedAmount || 0;
      const screenedAmount = costItem.costs.find(
        (cost) => cost.type === CostType.Screened
      )?.amount;
      this.totalScreened += screenedAmount || 0;
    });
  }
}
