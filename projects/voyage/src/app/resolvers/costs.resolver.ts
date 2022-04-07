import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CostsService } from '../services/costs.service';
import { CostsResponse } from '../interfaces/voyage.types';

@Injectable({
  providedIn: 'root',
})
export class CostsResolver implements Resolve<CostsResponse> {
  constructor(private costsService: CostsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<CostsResponse> {
    return this.costsService.getCosts();
  }
}
