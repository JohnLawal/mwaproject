import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpconnectionService } from '../httpconnection.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form : FormGroup;

    constructor(fb: FormBuilder, private httpConnection: HttpconnectionService) {
        this.form = fb.group({
            
            "firstName":["",Validators.required],
            "lastName":["",Validators.required],
            "email":["",Validators.compose([Validators.required,Validators.email])],
            "password":["",Validators.required],
            "passConfirm":["",Validators.required],
            "username":["",Validators.required]
        });
    }

    onSubmit(){
      const userData: any = this.form.value;
      delete userData.passConfirm;
      const signupresponse: any = this.httpConnection.signUpUser(userData).subscribe(
        (response: any) => {
        
          alert("Signed Up Sucessfully,..." + response.complete);
        },
        (error: any) => {
          alert("Error: " + error.error.data);
        }
      );
    }
    


  ngOnInit() {
  }

}
