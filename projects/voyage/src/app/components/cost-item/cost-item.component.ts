import { Component, Input, OnInit } from '@angular/core';
import { CostItem } from '../../interfaces/voyage.types';

@Component({
  selector: 'app-cost-item',
  templateUrl: './cost-item.component.html',
  styleUrls: ['./cost-item.component.scss'],
})
export class CostItemComponent implements OnInit {
  @Input()
  costItem: CostItem = {} as CostItem;

  constructor() {}

  ngOnInit(): void {}
}
