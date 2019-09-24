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
import { JwtModule } from '@auth0/angular-jwt';
import { AdminGuardGuard } from './admin-guard.guard';

const routes: Routes = [
  {path: '', component: AdminComponent, canActivate: [AdminGuardGuard], canActivateChild: [AdminGuardGuard],
  children: [
    {path: '' , component: DashboardComponent, canActivate: [AdminGuardGuard]},
    {path: 'dashboard' , component: DashboardComponent, canActivate: [AdminGuardGuard]},
    {path: 'investments', component: InvestmentsComponent, canActivate: [AdminGuardGuard]},
    {path: 'packages', component: PackagesComponent, canActivate: [AdminGuardGuard]},
    {path: 'packages/:id', component: ViewpackageComponent, canActivate: [AdminGuardGuard]},
    {path: 'members/:id', component: ViewmemberComponent, canActivate: [AdminGuardGuard]},
    {path: 'offlinepayments', component: OfflinepaymentsComponent, canActivate: [AdminGuardGuard]},
  ]}
];

export function tokenGetter() {
  localStorage.setItem('access_token', 'testing');
  return localStorage.getItem('access_token');
}
@NgModule({
  declarations: [AdminComponent, DashboardComponent,
     PackagesComponent, InvestmentsComponent,
      MembersComponent, OfflinepaymentsComponent, ViewmemberComponent, ViewpackageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    // This import uses the angular jwt module to add token to the requests
    JwtModule.forRoot({
      config: {
        tokenGetter,
        blacklistedRoutes: ['localhost:2020/api/v1']
      }
    })
  ],
  providers: [MediaMatcher, AdminHttpService, AdminGuardGuard]
})
export class AdminModule {
}
