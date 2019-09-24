import {MediaMatcher} from '@angular/cdk/layout';
import { NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {AngularMaterialModule} from '../../angular-material/angular-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InvestorsComponent } from './investors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyinvestmentsComponent } from './myinvestments/myinvestments.component';
import { PackagesComponent } from './packages/packages.component';
import { ViewpackageComponent } from './viewpackage/viewpackage.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyFollowedFarmsComponent } from './my-followed-farms/my-followed-farms.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MakePurchaseComponent } from './make-purchase/make-purchase.component';
import { LogoutComponent } from './logout.component';
import { JwtModule } from '@auth0/angular-jwt';
import { InvestorGuard } from './investor.guard';
import {InvestorHttpService} from './investor-http.service';

const routes: Routes = [
  {path: '', component: InvestorsComponent, canActivate: [InvestorGuard], canActivateChild: [InvestorGuard],
  children: [
    {path: '' , component: DashboardComponent},
    {path: 'dashboard' , component: DashboardComponent},
    {path: 'myinvestments', component: MyinvestmentsComponent},
    {path: 'packages', component: PackagesComponent},
    {path: 'packages/:id', component: ViewpackageComponent},
    {path: 'myprofile', component: MyprofileComponent},
    {path: 'myfollowedfarms', component: MyFollowedFarmsComponent},
    {path: 'contactus', component: ContactUsComponent},
    {path: 'buy/:id', component: MakePurchaseComponent},
    {path: 'logout', component: LogoutComponent}
  ]}
];

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [InvestorsComponent,
    DashboardComponent,
    MyinvestmentsComponent,
    PackagesComponent,
     ViewpackageComponent,
      MyprofileComponent,
      MyFollowedFarmsComponent,
      ContactUsComponent,
      MakePurchaseComponent,
      LogoutComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule.forChild(routes),
      // This import uses the angular jwt module to add token to the requests
      JwtModule.forRoot({
        config: {
          tokenGetter,
          blacklistedRoutes: ['localhost:2020/api/v1']
        }
      })
  ],
  providers: [MediaMatcher, InvestorHttpService, InvestorGuard]
})
export class InvestorsModule {
}
