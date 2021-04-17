import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
// https://fonts.google.com/icons?selected=Material+Icons:bookmark
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
  ]
})
export class MaterialModule { }
