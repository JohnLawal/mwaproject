import {MediaMatcher} from '@angular/cdk/layout';
import { NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {AngularMaterialModule} from '../../angular-material/angular-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InvestorsComponent } from './investors.component';

const routes: Routes = [
  {path: '', component: InvestorsComponent,
  children: [
    // {path: 'dashboard' , component: SignupComponent},
    // {path: 'myinvestments', component: SigninComponent},
    // {path: 'packages', component: AboutComponent},
    // {path: 'packages/:id', component: ForgotpasswordComponent},
    // {path: 'myprofile', component: ResetpasswordComponent},
    // {path: 'myinvestments', component: ResetpasswordComponent},
    // {path: 'myfollowedfarms', component: ResetpasswordComponent},
    // {path: 'contactus', component: ResetpasswordComponent},
    // {path: 'buy/:id', component: ResetpasswordComponent}
  ]}
];

@NgModule({
  declarations: [InvestorsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule.forChild(routes)
  ],
  providers: [MediaMatcher]
})
export class InvestorsModule {
}
