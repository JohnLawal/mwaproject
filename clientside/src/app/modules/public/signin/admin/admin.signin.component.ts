import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpconnectionService } from '../../../../httpconnection.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class AdminSigninComponent {

  public loginForm : FormGroup;
  public username : AbstractControl;
  public password : AbstractControl;
  public badCredentials : boolean;

  public jwtHelperService : JwtHelperService = new JwtHelperService();

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
          localStorage.setItem('access_token',response.token);
          let userInfo = this.getUserInfo(response.token);
          localStorage.setItem('user', JSON.stringify(userInfo));
          this.router.navigate(['admin']);
        },
        (error: any) => {
          alert("Failed to login" + error.error.data);
          throw(error);
        }
      );
      console.log("done");
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

  getUserInfo(token : string) {
    let decodedToken = this.jwtHelperService.decodeToken(token);
    console.log("decoding token..");
    console.log(decodedToken);
    let userInfo = {
      'username': decodedToken.username,
      'role': decodedToken.role
    };
    return userInfo;
  }

}
