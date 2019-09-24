import { Injectable } from '@angular/core';
import {Router, CanActivate, CanActivateChild,
     ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AdminGuardGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('access_token')) {
      return true;
    }
    console.log('Unauthorised Attempt For Admin Route');
    this.router.navigate(['public']);
    return false;
  }
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('access_token')) {
      return true;
    }

    console.log('Unauthorised Attempt For Admin Child Route');
    this.router.navigate(['public']);
    return false;
  }
}
