import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvestorHttpService } from './../investor-http.service';



export interface Package {
  '_id': string;
  'name': string;
  'amount': number;
  'contractPeriod': number;
  'expectedReturn': number;
  'units': number;
  'description': string;
  'status': string;
}

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  packages: Package[];

  constructor(private router: Router, private investorHttpService: InvestorHttpService  ) { }

  ngOnInit() {
    this.investorHttpService.getAllPackages().subscribe(
      (response: any) => {
        this.packages = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}

