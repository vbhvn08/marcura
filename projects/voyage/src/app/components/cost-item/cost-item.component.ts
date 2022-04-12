import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {BaseCurrency, CostItem, CostType, Exchange} from "../../interfaces/voyage.types";

@Component({
  selector: 'app-cost-item',
  templateUrl: './cost-item.component.html',
  styleUrls: ['./cost-item.component.scss']
})
export class CostItemComponent implements OnInit {
  @Input()
  costItem: CostItem;
  @Input()
  exchange: Exchange;
  @Input()
  baseCurrency: BaseCurrency;
  @Output()
  amountUpdated = new EventEmitter<{costItem: CostItem, amount: number}>();

  @ViewChild('costItemTemplate')
  costItemTemplate: TemplateRef<CostItemComponent>;

  constructor() { }

  ngOnInit(): void {

  }

  get quoted() {
    return this.costItem.costs.find(cost => cost.type === CostType.Quoted)?.amount || 0;
  }

  get screened() {
    return this.costItem.costs.find(cost => cost.type === CostType.Screened)?.amount || 0;
  }

  amountChanged(event: any){
    this.amountUpdated.next({costItem: this.costItem, amount: Number(event.target.value)});
  }
}
