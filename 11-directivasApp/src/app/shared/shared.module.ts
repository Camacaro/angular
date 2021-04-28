import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrMsgDirective } from './directives/err-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';



@NgModule({
  declarations: [
    ErrMsgDirective,
    CustomIfDirective
  ],
  exports: [
    ErrMsgDirective,
    CustomIfDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
