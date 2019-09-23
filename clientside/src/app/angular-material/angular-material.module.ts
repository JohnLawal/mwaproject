import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  imports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatInputModule],
  exports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatInputModule],
})
export class AngularMaterialModule { }
