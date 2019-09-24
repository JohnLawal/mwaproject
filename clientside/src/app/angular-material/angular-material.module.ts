import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  imports: [
            MatButtonModule,
            MatCheckboxModule,
            MatInputModule,
            MatCardModule,
            MatFormFieldModule,
            MatListModule,
            MatSidenavModule,
            MatIconModule,
            MatToolbarModule
          ],
  exports: [
            MatButtonModule,
            MatCheckboxModule,
            MatInputModule,
            MatCardModule,
            MatFormFieldModule,
            MatListModule,
            MatSidenavModule,
            MatIconModule,
            MatToolbarModule
          ],
})
export class AngularMaterialModule { }
