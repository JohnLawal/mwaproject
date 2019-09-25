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
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';




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
            MatToolbarModule,
            MatGridListModule,
            MatTableModule,
            MatMenuModule
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
            MatToolbarModule,
            MatGridListModule,
            MatTableModule,
            MatMenuModule
          ],
})
export class AngularMaterialModule { }
