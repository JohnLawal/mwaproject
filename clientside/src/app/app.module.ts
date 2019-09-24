import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {ReactiveFormsModule} from "@angular/forms";
import{HttpconnectionService} from "./httpconnection.service"
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'about', component: AboutComponent},
  {path: 'aboutus', redirectTo: 'about'},
  {path: 'forgotpassword', component: ForgotpasswordComponent},
  {path: 'resetpassword', component: ResetpasswordComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    AboutComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ HttpconnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
