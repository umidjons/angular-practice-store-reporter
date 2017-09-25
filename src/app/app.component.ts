import { Component, OnInit } from '@angular/core';
import { StoreSummary } from './store-summary';
import { StoreService } from './store.service';

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

  ngOnInit(): void {
    this.getNewCustomersCount();
    this.getActiveUsersCount();
    this.getSalesSum();
  }
}
