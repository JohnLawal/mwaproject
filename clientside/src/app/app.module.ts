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

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


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
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ HttpconnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
