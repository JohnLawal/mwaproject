import {MediaMatcher} from '@angular/cdk/layout';
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.css']
})
export class InvestorsComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  currentUser: any;

       token = localStorage.getItem('access_token');
       helper = new JwtHelperService();
      tokenBody = this.helper.decodeToken(this.token);
      username = this.tokenBody.username
      email = this.tokenBody.email

  private _mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef, private  media: MediaMatcher) {
   this.setupQueryListener();
   this.currentUser = {
     username: this.username,
     email: this.email};
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

  removeQueryListener(){
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
