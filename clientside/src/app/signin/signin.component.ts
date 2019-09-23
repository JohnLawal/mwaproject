import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';

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

  constructor(public formBuilder : FormBuilder) {
    this.loginForm = formBuilder.group({
      "username" : ['',Validators.required],
      "password" : ['',Validators.required]
    })
    this.username = this.loginForm.get('username');
    this.password = this.loginForm.get('password');
   }

  login(){
    // console.log("usernmae: " + this.username + "\npassword: " + this.password);
    this.validateUsername()
    if(!this.username.invalid){
      console.log("username is valid");
      this.validatePassword();
    }
      
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

  validateUsername() : boolean {
    if (!(this.username.value == this.credentials.username)){
      this.username.setErrors({'invalid':true})
      return false;
    }
    return true;
  }

  validatePassword() : boolean {
    if (!(this.password.value == this.credentials.password)){
      this.password.setErrors({'invalid':true})
      return false;
    }
      return true;
  }



}
