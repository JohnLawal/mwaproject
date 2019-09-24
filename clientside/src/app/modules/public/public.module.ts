import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import {AngularMaterialModule} from '../../angular-material/angular-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';



const routes: Routes = [
  {path: '', redirectTo: 'public'},
  {path: 'public', component: LandingpageComponent,
  children: [
    {path: 'signup' , component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'about', component: AboutComponent},
    {path: 'forgotpassword', component: ForgotpasswordComponent},
    {path: 'resetpassword', component: ResetpasswordComponent}
  ]}
];

@NgModule({
  declarations: [
    LandingpageComponent,
    SignupComponent,
    SigninComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule.forChild(routes)
  ],
  bootstrap: [LandingpageComponent]
})
export class PublicModule { }
