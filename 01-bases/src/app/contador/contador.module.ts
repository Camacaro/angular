import { NgModule } from '@angular/core';
import { ContatorComponent } from './contador/contador.component';

@NgModule({
  declarations: [
    ContatorComponent
  ],
  // Lo que quiero que sea publico y pueda ser usado en app.component.html
  exports: [
    ContatorComponent
  ]
})

export class ContadorModule {}
