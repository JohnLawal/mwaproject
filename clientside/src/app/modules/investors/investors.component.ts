import {MediaMatcher} from '@angular/cdk/layout';
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.css']
})
export class InvestorsComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef, private  media: MediaMatcher) {
   this.setupQueryListener();
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
