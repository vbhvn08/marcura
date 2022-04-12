import {Component, Input, OnInit} from '@angular/core';
import {BaseCurrency, Exchange} from "../../interfaces/voyage.types";

@Component({
  selector: 'app-amount-editable',
  templateUrl: './amount-editable.component.html',
  styleUrls: ['./amount-editable.component.scss']
})
export class AmountEditableComponent implements OnInit {
  @Input('amount')
  inputAmount: number;
  @Input()
  exchange: Exchange;
  @Input()
  baseCurrency: BaseCurrency;

  constructor() { }

  ngOnInit(): void {
  }

  onValueChange (event: any) {
    this.amount = event.target.value;
  }

  get amount() {
    return this.inputAmount * (this.exchange.exchangeRate || 1);
  }

  set amount(value) {
    this.inputAmount = Number(value.toString().replace(/[^\d.]/g,''))  / this.exchange.exchangeRate;
  }
}
