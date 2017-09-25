import { Component, OnInit } from '@angular/core';
import { StoreSummary } from './store-summary';
import { StoreService } from './store.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Store Reporter';
  newCustomersCount: StoreSummary;
  activeUsersCount: StoreSummary;
  salesSum: StoreSummary;
  topSellingProducts: Product[];

  constructor(private storeService: StoreService) { }

  getNewCustomersCount(): void {
    this.storeService.getNewCustomersCount().then(count => this.newCustomersCount = count);
  }

  getActiveUsersCount(): void {
    this.storeService.getActiveUsersCount().then(count => this.activeUsersCount = count);
  }

  getSalesSum(): void {
    this.storeService.getSalesSum().then(count => this.salesSum = count);
  }

  getTopSellingProducts(): void {
    this.storeService.getTopSellingProducts().then(products => this.topSellingProducts = products);
  }

  ngOnInit(): void {
    this.getNewCustomersCount();
    this.getActiveUsersCount();
    this.getSalesSum();
    this.getTopSellingProducts();
  }
}
