import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './modules/public/signup/signup.component';
import { SigninComponent } from './modules/public/signin/signin.component';
import { ForgotpasswordComponent } from './modules/public/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './modules/public/resetpassword/resetpassword.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './modules/public/about/about.component';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {ReactiveFormsModule} from "@angular/forms";
import{HttpconnectionService} from "./httpconnection.service"
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule)},
  {path: 'investor', loadChildren: () => import('./modules/investors/investors.module').then(m => m.InvestorsModule)},
  {path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)}

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
    AppComponent,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ HttpconnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
