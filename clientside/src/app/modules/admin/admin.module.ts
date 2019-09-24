import {MediaMatcher} from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {path: '', component: AdminComponent,
  children: [
    {path: '' , component: DashboardComponent},
    {path: 'dashboard' , component: DashboardComponent},
    {path: 'investments', component: InvestmentsComponent},
    {path: 'packages', component: PackagesComponent},
    {path: 'packages/:id', component: ViewpackageComponent},
    {path: 'members', component: MembersComponent},
    {path: 'members/:id', component: ViewmemberComponent},
    {path: 'offlinepayments', component: OfflinepaymentsComponent},
  ]}
];

@NgModule({
  declarations: [AdminComponent, DashboardComponent,
     PackagesComponent, InvestmentsComponent,
      MembersComponent, OfflinepaymentsComponent, ViewmemberComponent, ViewpackageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule.forChild(routes)
  ],
  providers: [MediaMatcher]
})
export class AdminModule { }
