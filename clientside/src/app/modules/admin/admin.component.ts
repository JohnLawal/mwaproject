import {MediaMatcher} from '@angular/cdk/layout';
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  currentUser: any;

  private _mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef, private  media: MediaMatcher, private router : Router) {
   this.setupQueryListener();
   this.currentUser = {
     username: 'Johnny',
     email: 'johnimholawal@gmail.com'};
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.removeQueryListener();
  }


  setupQueryListener() {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  removeQueryListener() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    this.router.navigate(['/public']);
  }

}
