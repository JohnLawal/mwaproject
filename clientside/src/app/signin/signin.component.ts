import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  public username: string = '';
  public password: string = '';
  
  public credentials = {
    "username" : "dawit",
    "password" : "pass123"
  }

  constructor() { }

  login(){
    console.log("usernmae: " + this.username + "\npassword: " + this.password);

  }

  badUsername() {

  }

  badPassword() {
    
  }



}
