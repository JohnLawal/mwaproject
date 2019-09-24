import { Component, OnInit } from '@angular/core';


interface Investment {
  name: string;
  units: number;
  amount: string;
  dateOfInvestment: Date;
  contractPeriod: string;
  expectedReturn: string;
  status: string;
}

const ELEMENT_DATA: Investment[] = [
  {name: 'Poultry Farm', units: 20, amount: '$200,000', dateOfInvestment: new Date('02/12/2019'),
   contractPeriod: '90 days', expectedReturn: '$300,000' , status : 'Settled'},
   {name: 'Fish Far', units: 15, amount: '$100,000', dateOfInvestment: new Date('03/11/2019'),
   contractPeriod: '45 days', expectedReturn: '$500,000' , status : 'Current'},
];


@Component({
  selector: 'app-myinvestments',
  templateUrl: './myinvestments.component.html',
  styleUrls: ['./myinvestments.component.css']
})
export class MyinvestmentsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'units', 'amount', 'dateOfInvestment', 'contractPeriod', 'expectedReturn' , 'status'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
