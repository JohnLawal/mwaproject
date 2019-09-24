import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpconnectionService } from '../../../../httpconnection.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent {
  
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
   login (){
    const signupresponse: any = this.httpConnection.signInUser(this.loginForm.value).subscribe(
      (response: any) => {
        localStorage.setItem('acess_token',response.token);
        this.router.navigate(['investor']);
     //   alert("Signed Up Sucessfully,...,"+response);
      },
      (error: any) => {
        alert("Failed to login" + error.error.data);
      }
    );
   }

   // End of  login 2 

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
  
}
