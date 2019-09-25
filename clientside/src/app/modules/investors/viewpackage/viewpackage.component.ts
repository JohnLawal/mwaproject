import { Package } from './../packages/packages.component';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
  selector: 'app-viewpackage',
  templateUrl: './viewpackage.component.html',
  styleUrls: ['./viewpackage.component.css']
})
export class ViewpackageComponent implements OnInit {
  package: Package[];

  constructor(private route: ActivatedRoute, private investorHttpService: InvestorHttpService) {
    this.route.params.subscribe( params => {
      const packageId = params.id;
      this.investorHttpService.getOnePackage(packageId).subscribe(
        (response: any) => {
          this.package = response;
        },
        (error: any) => {
          console.log(error);
        }
      );
    });

  }

  ngOnInit() {
  }

}
