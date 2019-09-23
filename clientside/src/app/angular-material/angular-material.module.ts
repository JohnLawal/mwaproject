import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  imports: [BrowserAnimationsModule,
            MatButtonModule,
            MatCheckboxModule,
            MatInputModule,
            MatCardModule],
  exports: [BrowserAnimationsModule,
            MatButtonModule,
            MatCheckboxModule,
            MatInputModule,
            MatCardModule],
})
export class AngularMaterialModule { }
