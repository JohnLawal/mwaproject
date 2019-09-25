import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
providedIn : "root"
})
export class HttpconnectionService {

  



  private signUpLink = 'http://localhost:2020/api/v1/invest';
  private signInLink = 'http://localhost:2020/api/v1/invest/login';
  private contactLink = 'http://localhost:2020/api/v1/invest/contact';
  private getUserLink = 'http://localhost:2020/api/v1/invest/';
  private updateLink = 'http://localhost:2020/api/v1/invest/'


  constructor(private httpClient: HttpClient) { }

 signUpUser(userData: any): any {
    return this.httpClient.post(this.signUpLink, userData);
  }

  signInUser(userData: any): any {
    return this.httpClient.post(this.signInLink, userData);
  }
  contact(userData: any): any {
    return this.httpClient.post(this.contactLink, userData);
  }

  getuserInfo(): Observable<any> {
    let  token = localStorage.getItem('access_token');
  let helper = new JwtHelperService();
  let tokenBody = helper.decodeToken(token);
  let username = tokenBody.username
  console.log(username);

    return this.httpClient.get(this.getUserLink+""+username);
  }

  updateInvestor(userData: any): any {
    let  token = localStorage.getItem('access_token');
    let helper = new JwtHelperService();
    let tokenBody = helper.decodeToken(token);
    let username = tokenBody.username
    return this.httpClient.patch(this.updateLink+""+username, userData);
  }
   
  /** 
  signInUser(userData: any): any {
    return this.httpClient.post(this.signInLink, userData);
  }
  getSecretInfo(): any {
    return this.httpClient.get(this.secretLink);
  }

  */

}
