import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostsComponent } from './components/costs/costs.component';
import { CostsResolver } from './resolvers/costs.resolver';
import { ExchangeRatesResolver } from './resolvers/exchange-rates.resolver';

const routes: Routes = [
  {
    path: '',
    component: CostsComponent,
    resolve: { costs: CostsResolver, exchangeRates: ExchangeRatesResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
