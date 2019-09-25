import { Package } from './../packages/packages.component';
import { Component, OnInit , Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { InvestorHttpService } from './../investor-http.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  unitsToBuy: number;
}


@Component({
  selector: 'app-enter-number-of-units-dialog',
  templateUrl: './enter-number-of-units-modal.html',
})
export class DialogUnitsComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogUnitsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


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
  unitsToBuy: number;

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private investorHttpService: InvestorHttpService) {
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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogUnitsComponent, {
      width: '250px',
      data: {unitsToBuy: this.unitsToBuy}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.unitsToBuy = result;
      alert(`A member of our team will contact you shortly for your ${this.unitsToBuy} units`);
      console.log(this.unitsToBuy);
    });
  }

  ngOnInit() {
  }

}
