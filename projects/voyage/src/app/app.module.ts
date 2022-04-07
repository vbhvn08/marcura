import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostsComponent } from './components/costs/costs.component';
import { ExpenseCategoriesComponent } from './components/expense-categories/expense-categories.component';
import { CostItemComponent } from './components/cost-item/cost-item.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    CostsComponent,
    ExpenseCategoriesComponent,
    CostItemComponent,
    CommentsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CurrencyPipe, DecimalPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
