import { InvestorHttpService } from './../investor-http.service';
import { Component, OnInit } from '@angular/core';
interface InvestorDashboardStatistics {
  mostRecentInvestment: Date;
  totalUnitsAvailable: number;
  numberOfInvestments: number;
  numberOfFarmsFollowed: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  dashboardStats: InvestorDashboardStatistics;
  constructor(private investorHttpService: InvestorHttpService) {
     investorHttpService.getDashboardStats().subscribe((res: any) => {
       this.dashboardStats = res.data;
     });
   }

  ngOnInit() {
  }

}
