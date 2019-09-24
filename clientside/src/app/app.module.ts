import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import{HttpconnectionService} from "./httpconnection.service"

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule)},
  {path: 'investor', loadChildren: () => import('./modules/investors/investors.module').then(m => m.InvestorsModule)},
  {path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)}

];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ HttpconnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
