import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form : FormGroup;
  firstName = new FormControl("", Validators.required);
    
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            "firstName": this.firstName,
            "lastName":["",Validators.required],
            "email":["",Validators.required],
            "password":["",Validators.required],
            "passConfirm":["",Validators.required],
            "username":["",Validators.required]
        });
    }


  ngOnInit() {
  }

}
