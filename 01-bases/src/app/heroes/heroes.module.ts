import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  // Lo que quiero que sea publico y pueda ser usado en app.component.html
  exports: [
    ListadoComponent
  ],
  // Otros modulos, que seran importados
  imports: [
    // esto nos ofrece las directivas de ngFor, ngIf, etc
    CommonModule
  ]
})

export class HeroesModule {}
