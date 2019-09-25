import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { promisify } from 'util';
import { Router } from '@angular/router';
import { HttpconnectionService } from '../../../httpconnection.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  public credentials = {
    "username" : "dawit",
    "password" : "pass123"
  }

  public loginForm : FormGroup;
  public username : AbstractControl;
  public password : AbstractControl;

  constructor(public router: Router, public formBuilder : FormBuilder,  private httpConnection: HttpconnectionService) {
    this.loginForm = formBuilder.group({
      "username" : ['',Validators.required],
      "password" : ['',Validators.required]
    })
    this.username = this.loginForm.get('username');
    this.password = this.loginForm.get('password');
   }

   //  yvan login to the front End 
   login2 (){
    const signupresponse: any = this.httpConnection.signInUser(this.loginForm.value).subscribe(
      (response: any) => {
        localStorage.setItem('access_token',response.token);
        this.router.navigate(['investor']);
     //   alert("Signed Up Sucessfully,...,"+response);
      },
      (error: any) => {
        alert("Failed to login" + error.error.data);
      }
    );
   }

   // End of  login 2 


  async login(){
      await this.validateUsername();
      if (this.username.valid) {
        await this.validatePassword();
        if (this.password.valid) {
          console.log("SUCCESS!");
          this.router.navigate(['investor']);
        } else console.log("bad password")
      } else console.log("bad username");
  }

  badUsername() : string {
    if(this.username.hasError('required'))
      return "Username is required";
    else if (this.username.hasError('invalid'))
      return "The username does not exist";
    else
      return "";
  }

  badPassword() : string {
    if(this.password.hasError('required'))
      return "Password is required";
    else if (this.password.hasError('invalid'))
      return "Incorrect password";
    else
      return "";
  }

  async validateUsername() {
    let valid = await (this.username.value == this.credentials.username);
    if (!valid)
      this.username.setErrors({'invalid':true})
  }

  async validatePassword() {
    let valid = await(this.password.value == this.credentials.password);
    if (!valid)
      this.password.setErrors({'invalid':true});
  }



}
