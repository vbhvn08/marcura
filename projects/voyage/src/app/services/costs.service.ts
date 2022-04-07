import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CostsResponse } from '../interfaces/voyage.types';

const ENDPOINT = '/assets/costs.json';

@Injectable({
  providedIn: 'root',
})
export class CostsService {
  constructor(private http: HttpClient) {}

  getCosts(): Observable<CostsResponse> {
    return this.http.get<CostsResponse>(ENDPOINT);
  }
}
