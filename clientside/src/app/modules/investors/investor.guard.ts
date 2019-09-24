import { Injectable } from '@angular/core';
import {Router, CanActivate, CanActivateChild,
  ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';


@Injectable()
export class InvestorGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('access_token')) {
      return true;
    }
    console.log('Unauthorised Attempt For Investor Route');
    this.router.navigate(['public']);
    return false;
  }
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('access_token')) {
      return true;
    }

    console.log('Unauthorised Attempt For Investor Child Route');
    this.router.navigate(['public']);
    return false;
  }
}
