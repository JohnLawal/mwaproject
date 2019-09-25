import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpconnectionService } from '../../../httpconnection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  form : FormGroup;

  constructor(fb: FormBuilder, private router : Router, private httpConnection : HttpconnectionService) {
      this.form = fb.group({
          "title":["",Validators.required],
          "message":["",Validators.required],
      });
  }

  onSubmit(){

   
    const signupresponse: any = this.httpConnection.contact(this.form.value).subscribe(
      (response: any) => {
        alert("Message sent sucessfully");
        this.form.reset();
      },
      (error: any) => {
        alert(error);
      }
    );

  }

  ngOnInit() {
  }

}
