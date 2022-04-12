import {Component, Input, OnInit} from '@angular/core';
import {BaseCurrency, Exchange} from "../../interfaces/voyage.types";

@Component({
  selector: 'app-amount-display',
  templateUrl: './amount-display.component.html',
  styleUrls: ['./amount-display.component.scss']
})
export class AmountDisplayComponent implements OnInit {
  @Input()
  amount: number;
  @Input()
  exchange: Exchange;
  @Input()
  baseCurrency: BaseCurrency;

  constructor() { }

  ngOnInit(): void {
  }
}
