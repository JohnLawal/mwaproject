import { Component, OnInit } from '@angular/core';
import { AdminHttpService } from '../admin-http.service';

interface AdminDashboardStatistics {
  numberOfMembers: number;
  numberOfInvestors: number;
  numberOfPendingOfflinePayments: number;
  currentAmountInvested: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardStats: AdminDashboardStatistics;

  constructor(private adminHttpService: AdminHttpService) { }

  ngOnInit() {
  }

}
