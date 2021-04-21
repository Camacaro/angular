import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basicos',
        component: BasicosComponent
      },
      {
        path: 'dinamicos',
        component: DinamicosComponent
      },
      {
        path: 'switches',
        component: SwitchesComponent
      },
      {
        path: '**',
        component: BasicosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule]  lo quito porque esta exportado de manera global
})
export class ReactiveRoutingModule { }
