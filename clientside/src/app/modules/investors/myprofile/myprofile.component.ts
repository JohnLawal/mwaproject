import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpconnectionService } from '../../../httpconnection.service';
import { Router } from '@angular/router';

interface userInfo {
  firstName : string,
  lastName :  string,
  username : string,
  email :  string,
  password :  string,
  accountNumber : number,
  phoneNumber :  number,
  bankName :  string,
}

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})

export class MyprofileComponent implements OnInit {

  form : FormGroup;
  user: userInfo;

  constructor(fb: FormBuilder, private httpConnection: HttpconnectionService, private router : Router) {
    this.httpConnection.getuserInfo().subscribe((res:any)=>{
      this.user = res.data;
      this.form.controls['firstName'].setValue(this.user.firstName);
      this.form.controls['lastName'].setValue(this.user.lastName);
      this.form.controls['email'].setValue(this.user.email);
      this.form.controls['username'].setValue(this.user.username);
      this.form.controls['phoneNumber'].setValue(this.user.phoneNumber);
      this.form.controls['accountNumber'].setValue(this.user.accountNumber);
      this.form.controls['bankName'].setValue(this.user.bankName);
      console.log('here we go');
       
    });

      this.form = fb.group({
          "firstName":["",Validators.required],
          "lastName":["",Validators.required],
          "email":["",Validators.compose([Validators.required,Validators.email])],
          "username":[{value:"",disabled:true},Validators.required],
          "phoneNumber":[""],
          "accountNumber":[""],
          "bankName":[""],
          "edit" :[false]

      });
  }

  updateInfo(){
    const userData: any = this.form.value;
    delete userData.edit;
    const signupresponse: any = this.httpConnection.updateInvestor(userData).subscribe(
      (response: any) => {
        alert("User updated sucessfully");
      },
      (error: any) => {
        alert("Failed to create account, use different username or email");
        this.form.reset();
      }
    );

  }

  ngOnInit() {
   
  }

}
