import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';


@NgModule({
  imports: [BrowserAnimationsModule,
            MatButtonModule,
            MatCheckboxModule,
            MatInputModule,
            MatCardModule,
            MatFormFieldModule,
            MatListModule],
  exports: [BrowserAnimationsModule,
            MatButtonModule,
            MatCheckboxModule,
            MatInputModule,
            MatCardModule,
            MatFormFieldModule,
            MatListModule],
})
export class AngularMaterialModule { }
