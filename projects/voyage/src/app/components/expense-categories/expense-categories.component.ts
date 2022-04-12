import {Component, Input, OnInit} from '@angular/core';
import {BaseCurrency, CostItem, CostType, Exchange, Expense,} from '../../interfaces/voyage.types';

@Component({
  selector: 'app-expense-categories',
  templateUrl: './expense-categories.component.html',
  styleUrls: ['./expense-categories.component.scss'],
})
export class ExpenseCategoriesComponent implements OnInit {
  @Input()
  expenseCategory: Expense;
  @Input()
  exchange: Exchange;
  @Input()
  baseCurrency: BaseCurrency;

  totalQuoted: number = 0;
  totalScreened: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.calculateTotal(this.expenseCategory.costItems);
  }

  calculateTotal(costItems: CostItem[]) {
    this.totalQuoted = 0;
    this.totalScreened = 0;
    costItems.map((costItem) => {
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

  recalculateTotal(value: {costItem: CostItem, amount: number}){
    const updateCosts = this.expenseCategory.costItems.map(costItem => {
      if(costItem.id === value.costItem.id){
        const costs = costItem.costs.map(cost => {
          if(cost.type === CostType.Screened) {
            return {
              ...cost,
              amount: value.amount/this.exchange.exchangeRate
            }
          }
          return cost;
        })
        return{
          ...costItem,
          costs
        }
      }
      return costItem;
    });
    this.calculateTotal(updateCosts);
  }
}
