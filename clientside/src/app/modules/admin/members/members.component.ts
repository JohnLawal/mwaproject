import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { AdminHttpService } from '../admin-http.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  public jwtHelper: JwtHelperService = new JwtHelperService();
  
  constructor(public http : AdminHttpService) { }

  ngOnInit() {
  //  let user = JSON.parse(localStorage.getItem('user'));
  //  this.http.getAdmin(user.username).subscribe(
   //   (response:any) => {
   //     console.log('success');
  //      console.log(response);
  //    }, 
  //    (error:any) => {
//        console.log(error);
//      }
//    );
  }

}
