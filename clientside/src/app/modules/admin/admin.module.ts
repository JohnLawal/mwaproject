import {MediaMatcher} from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import {AngularMaterialModule} from '../../angular-material/angular-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PackagesComponent } from './packages/packages.component';
import { InvestmentsComponent } from './investments/investments.component';
import { MembersComponent } from './members/members.component';
import { OfflinepaymentsComponent } from './offlinepayments/offlinepayments.component';
import { ViewmemberComponent } from './viewmember/viewmember.component';
import { ViewpackageComponent } from './viewpackage/viewpackage.component';
import { AdminHttpService } from './admin-http.service';
import {  HttpClientModule } from '@angular/common/http';
// import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { AdminGuardGuard } from './admin-guard.guard';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomInterceptor} from '../../custom-interceptor.interceptor';
import { CreatePackageComponent } from './create-package/create-package.component';


const routes: Routes = [
  {path: '', component: AdminComponent, canActivate: [AdminGuardGuard], canActivateChild: [AdminGuardGuard],
  children: [
    {path: '' , component: DashboardComponent, canActivate: [AdminGuardGuard]},
    {path: 'dashboard' , component: DashboardComponent, canActivate: [AdminGuardGuard]},
    {path: 'investments', component: InvestmentsComponent, canActivate: [AdminGuardGuard]},
    {path: 'packages', component: PackagesComponent, canActivate: [AdminGuardGuard]},
    {path: 'packages/new', component: CreatePackageComponent, canActivate: [AdminGuardGuard]},
    {path: 'packages/view/:id', component: ViewpackageComponent, canActivate: [AdminGuardGuard]},
    {path: 'members', component: MembersComponent, canActivate: [AdminGuardGuard]},
    {path: 'members/:id', component: ViewmemberComponent, canActivate: [AdminGuardGuard]},
    {path: 'offlinepayments', component: OfflinepaymentsComponent, canActivate: [AdminGuardGuard]},
  ]}
];

// export function tokenGetter() {
//   console.log("token getter is triggered....");
//   return localStorage.getItem('access_token');
// }

@NgModule({
  declarations: [AdminComponent, DashboardComponent,
     PackagesComponent, InvestmentsComponent,
      MembersComponent, OfflinepaymentsComponent, ViewmemberComponent,
       ViewpackageComponent, CreatePackageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    // This import uses the angular jwt module to add token to the requests
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter,
    //     whitelistedDomains: ['localhost:2020/api/v1']
    //   }
    // })
  ],
  providers: [MediaMatcher, AdminHttpService, AdminGuardGuard , {provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true}]
})
export class AdminModule {
}
