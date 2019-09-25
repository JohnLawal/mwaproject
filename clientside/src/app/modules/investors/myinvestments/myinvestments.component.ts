import { Component, OnInit } from '@angular/core';
import { InvestorHttpService } from './../investor-http.service';


interface Investment {
  name: string;
  units: number;
  amount: string;
  dateOfInvestment: Date;
  contractPeriod: string;
  expectedReturn: string;
  status: string;
}

@Component({
  selector: 'app-myinvestments',
  templateUrl: './myinvestments.component.html',
  styleUrls: ['./myinvestments.component.css']
})
export class MyinvestmentsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'units', 'amount', 'dateOfInvestment', 'contractPeriod', 'expectedReturn' , 'status'];
  dataSource: Investment[];

  constructor(private investorHttpService: InvestorHttpService) {
      investorHttpService.getAllInvestments().subscribe((res: any) => {
       this.dataSource = res.data;
     });
  }

  ngOnInit() {
  }

}
