import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AdminHttpService } from '../admin-http.service';
import { Router } from '@angular/router';


interface packageInfo {
  name: string;
  amount: number;
  contractPeriod: number;
  expectedReturn: number;
  unitsAvailable: number;
  description: string;
}

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.css']
})
export class CreatePackageComponent implements OnInit {
  form: FormGroup;
  package: packageInfo;
  defaultProfileImage = "https://i1.wp.com/jlawal.com/wp-content/uploads/2018/08/cropped-favicons-1.png?fit=180%2C145&ssl=1";
  defaultCoverImage = "https://farm360.org/assets/content/uploads/brands-cover.jpg";

  constructor(fb: FormBuilder, private httpConnection: AdminHttpService, private router: Router) {
      this.form = fb.group({
          name: ['', Validators.required],
          amount: [0, Validators.required],
          contractPeriod : [0, Validators.required],
          expectedReturn: [0, Validators.required],
          unitsAvailable: [0, Validators.required],
          description: ['', Validators.required],
          profileImage: [this.defaultProfileImage],
          coverImage: [this.defaultCoverImage],
          status: ['Available'],
          followers: [[]],
          investments: [[]]

      });
  }

  addPackage() {
    const packageData: any = this.form.value;

    const addresponse: any = this.httpConnection.postPackage(packageData).subscribe(
      (response: any) => {
        this.form.reset();

        alert('Package added sucessfully');
      },
      (error: any) => {
        alert('Failed to add package' + error);
        this.form.reset();
      }
    );

  }

  ngOnInit() {
  }

}
