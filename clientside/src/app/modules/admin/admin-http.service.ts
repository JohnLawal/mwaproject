import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AdminHttpService {
  private getDashboardStatsLink = 'http://localhost:2020/api/v1/users';
  private getAllInvestmentsLink = 'http://localhost:2020/api/v1/users/signin';
  private getAllPackagesLink = 'http://localhost:2020/api/v1/protected';
  private getOfflinePaymentsLink = 'http://localhost:2020/api/v1/users/verifyemail';

  constructor(private httpClient: HttpClient) { }

  getDashboardStats(): any {
    return this.httpClient.get(this.getDashboardStatsLink);
  }
  getAllInvestments(): any {
    return this.httpClient.get(this.getAllInvestmentsLink);
  }
  getAllPackages(): any {
    return this.httpClient.get(this.getAllPackagesLink);
  }
  getOfflinePayments(): any {
    return this.httpClient.get(this.getOfflinePaymentsLink);
  }
}
