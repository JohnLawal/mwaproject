import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: `
     
  `,
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    localStorage.removeItem('access_token');
    this.router.navigate(['public']);
  }

}
