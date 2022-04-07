import {ExpenseCategoriesComponent} from './expense-categories.component';
import {byTestId, Spectator} from "@ngneat/spectator";
import {createComponentFactory, mockProvider} from "@ngneat/spectator/jest";
import {CurrencyPipe} from "@angular/common";
import {CostType} from "../../interfaces/voyage.types";

describe('ExpenseCategoriesComponent', () => {
  let spectator: Spectator<ExpenseCategoriesComponent>;

  const createComponent = createComponentFactory({
    component: ExpenseCategoriesComponent,
    declarations: [],
    detectChanges: false,
    providers: [
      mockProvider(CurrencyPipe)
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.component.expenseCategory = {
      "id": 716,
      "name": "Port Expenses",
      "displayOrder": 1,
      "costItems": [
        {
          "id": 1796,
          "name": "Barge Expenses",
          "costItemAlias": {
            "accountingCode": "Acc-01"
          },
          "annotation": {
            "id": 30002,
            "name": "Asia"
          },
          "costs": [
            {
              "daStage": "PDA",
              "persona": "BACKOFFICE",
              "type": CostType.Quoted,
              "amount": 1500
            },
            {
              "daStage": "PDA",
              "persona": "BACKOFFICE",
              "type": CostType.Screened,
              "amount": 1500
            }
          ],
          "comments": [
            {
              "id": 503,
              "daStage": "PDA",
              "persona": "BACKOFFICE",
              "author": "Mr. Agency BO",
              "comment": "Comment 1",
              "type": "Internal",
              "date": "2021-03-01T10:15:35.927924Z"
            }
          ]
        },
        {
          "id": 1797,
          "name": "Fire Guard",
          "costItemAlias": {
            "accountingCode": "Acc-02"
          },
          "annotation": {
            "id": 30002,
            "name": "Asia"
          },
          "costs": [
            {
              "daStage": "PDA",
              "persona": "BACKOFFICE",
              "type": CostType.Quoted,
              "amount": 5400
            },
            {
              "daStage": "PDA",
              "persona": "BACKOFFICE",
              "type": CostType.Screened,
              "amount": 5400
            }
          ],
          "comments": [
            {
              "id": 504,
              "daStage": "PDA",
              "persona": "BACKOFFICE",
              "author": "Mr. Agency BO",
              "comment": "Comment 2",
              "type": "External",
              "date": "2021-03-01T10:15:46.363755Z"
            }
          ]
        }
      ]
    };
    spectator.component.selectedCurrency = 'SGD';
    spectator.component.exchange = { "fromCurrency": "SGD", "toCurrency": "SGD", "exchangeRate": 1 };
    spectator.component.baseCurrency = {
      "currency": "USD",
      "exchangeRate": 0.7598199759292418
    };

  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should display cost items', () => {
    spectator.detectChanges();
    const rows = spectator.queryAll(byTestId('cost-item'));
    expect(rows.length).toBe(2);
  });
});
