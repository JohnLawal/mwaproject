import { Component, OnInit } from '@angular/core';
import { AdminHttpService } from '../admin-http.service';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface Package {
  'id' : string,
  'name' : string,
  'amount' : number,
  'contractPeriod' : number,
  'roi' : number,
  'units' : number,
  'description': string,
  'status': string
}

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  public packages : Package[];
  constructor(public router: Router, public adminHttpService : AdminHttpService) { }

  ngOnInit() {
    this.adminHttpService.getAllPackages().subscribe(
      (response:any) => {
        this.packages = [];
        console.log(response);
        this.getPackageInfo(response);
        console.log(response);
      }, 
      (error:any) => {
        console.log(error);
      }
    );
  }

  getPackageInfo(dataArray : any[]){
    from(dataArray).pipe(
      map((data : any) => ({
        'id' : data._id,
        'name' : data.name,
        'amount' : data.amount,
        'contractPeriod' : data.contractPeriod,
        'roi' : data.expectedReturn,
        'units' : data.availableUnits,
        'description': data.description,
        'status': data.status})
      )    
    ).subscribe((p : Package) => {
      this.packages = this.packages.concat([p]);
      console.log("adding ..." + JSON.stringify(p));
    })
  }

  edit(p: Package){
    console.log(p);
    this.router.navigate(['/admin/packages/'+p.id]);
  }

  delete(p: Package){

  }
}
