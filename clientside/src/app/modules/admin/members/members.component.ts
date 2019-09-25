import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { AdminHttpService } from '../admin-http.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { of, from } from 'rxjs';
import { map } from 'rxjs/operators'
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'email', 'username'];

  // STATE
  public jwtHelper: JwtHelperService = new JwtHelperService();
  public users : UserData[] = [];
  public dataSource: MatTableDataSource<UserData>;
  
  constructor(public adminHttpService : AdminHttpService) {
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit() {
    this.adminHttpService.getUsers().subscribe(
      (response:any) => {
        this.users = [];
        this.getUserInfo(response.data);
        console.log(response);
      }, 
      (error:any) => {
        console.log(error);
      }
    );
  }

  getUserInfo(dataArray : any[]){
    from(dataArray).pipe(
      map((data) => ({
            'name': data.firstName + " " + data.lastName,
            'username' : data.username,
            'email': data.email})
      )    
    ).subscribe((userInfo : UserData) => {
      this.users = this.users.concat([userInfo]);
      this.dataSource.data = this.users;
      console.log("adding ..." + JSON.stringify(userInfo));
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
