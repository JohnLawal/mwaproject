import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpconnectionService } from '../../../../httpconnection.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class AdminSigninComponent {

  public loginForm : FormGroup;
  public username : AbstractControl;
  public password : AbstractControl;
  public badCredentials : boolean;

  constructor(public router: Router, public httpConnection: HttpconnectionService, public formBuilder : FormBuilder) {
    this.loginForm = formBuilder.group({
      "username" : ['',Validators.required],
      "password" : ['',Validators.required]
    })
    this.username = this.loginForm.get('username');
    this.password = this.loginForm.get('password');
   }

  login(){
    this.httpConnection.signInAdmin(this.loginForm.value)
      .subscribe(
        (response: any) => {
          console.log("Signed in");
          localStorage.setItem('access_token',response.token);
          this.router.navigate(['admin']);
          //   alert("Signed Up Sucessfully,...,"+response);
        },
        (error: any) => {
          alert("Failed to login" + error.error.data);
          throw(error);
        }
      );
  }

  badUsername() : string {
    if(this.username.hasError('required'))
      return "Username is required";
    return "";
  }

  badPassword() : string {
    if(this.password.hasError('required'))
      return "Password is required";
    return "";
  }

}
