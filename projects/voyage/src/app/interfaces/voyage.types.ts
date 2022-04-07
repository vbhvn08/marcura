export interface CostsResponse {
  daCurrency: DaCurrency;
  baseCurrency: BaseCurrency;
  costs: Expense[];
}

export interface BaseCurrency {
  currency: string;
  exchangeRate: number;
}

export interface Expense {
  id: number;
  name: string;
  displayOrder: number;
  costItems: CostItem[];
}

export interface CostItem {
  id: number;
  name: string;
  costItemAlias: CostItemAlias;
  annotation: Annotation;
  costs: Cost[];
  comments?: Comment[];
}

export interface Annotation {
  id: number;
  name: string;
}

export interface Comment {
  id: number;
  daStage: string;
  persona: string;
  author: string;
  comment: string;
  type: string;
  date: Date;
}

export interface CostItemAlias {
  accountingCode: string;
}

export interface Cost {
  daStage: string;
  persona: string;
  type: CostType;
  amount: number;
}

export interface DaCurrency {
  currency: string;
}

export interface ExchangeRatesResponse {
  sourceCurrency: string;
  paymentCurrencies: Exchange[];
}

export interface Exchange {
  fromCurrency: string;
  toCurrency: string;
  exchangeRate: number;
}

export enum CostType {
  Quoted = 'Quoted',
  Screened = 'Screened',
}
