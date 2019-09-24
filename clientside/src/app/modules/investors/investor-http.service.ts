import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class InvestorHttpService {
  private getDashboardStatsLink = 'http://localhost:2020/api/v1/invest/dashboard';
  // private getMyInvestmentsLink = 'http://localhost:2020/api/v1/users/signin';
  // private getAllPackagesLink = 'http://localhost:2020/api/v1/protected';

  constructor(private httpClient: HttpClient) { }

  getDashboardStats(): Observable<any> {
    return this.httpClient.get(this.getDashboardStatsLink);
  }
  // getAllInvestments(): any {
  //   return this.httpClient.get(this.getMyInvestmentsLink);
  // }
  // getAllPackages(): any {
  //   return this.httpClient.get(this.getAllPackagesLink);
  // }

}
