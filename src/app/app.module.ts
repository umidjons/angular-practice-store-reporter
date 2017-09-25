import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SummaryCardComponent } from './summary-card/summary-card.component';
import { StoreService } from './store.service';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryCardComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
