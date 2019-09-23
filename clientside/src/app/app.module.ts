import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule)}
];

import {AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
