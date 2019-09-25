import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class InvestorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const userToken = localStorage.getItem('access_token');
        const authRequest = req.clone(
            {headers: req.headers.set('Authorization', 'Bearer '+userToken)});
        return next.handle(authRequest);
    }
}
