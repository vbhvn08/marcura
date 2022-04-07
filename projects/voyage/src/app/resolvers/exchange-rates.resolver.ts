import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ExchangeRatesResponse } from '../interfaces/voyage.types';
import { ExchangeRatesService } from '../services/exchange-rates.service';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesResolver implements Resolve<ExchangeRatesResponse> {
  constructor(private exchangeRatesService: ExchangeRatesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ExchangeRatesResponse> {
    return this.exchangeRatesService.getExchangeRates();
  }
}
