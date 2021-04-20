import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule]. lo quito porque esta exportado de manera global
})
export class TemplateRoutingModule { }
