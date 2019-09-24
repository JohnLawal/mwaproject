import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
providedIn : "root"
})
export class HttpconnectionService {

  private signUpLink = 'http://localhost:2020/api/v1/invest';

  constructor(private httpClient: HttpClient) { }

 signUpUser(userData: any): any {
    return this.httpClient.post(this.signUpLink, userData);
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
