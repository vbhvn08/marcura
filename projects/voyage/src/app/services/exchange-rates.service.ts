import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExchangeRatesResponse } from '../interfaces/voyage.types';

const ENDPOINT = '/assets/exchange-rates.json';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesService {
  constructor(private http: HttpClient) {}

  getExchangeRates(): Observable<ExchangeRatesResponse> {
    return this.http.get<ExchangeRatesResponse>(ENDPOINT);
  }
}
