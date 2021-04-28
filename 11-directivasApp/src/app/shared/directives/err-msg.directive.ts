import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appErrMsg]'
})
export class ErrMsgDirective implements OnInit {

  constructor() {
    console.log('constructor directive');
  }

  ngOnInit(): void {
    console.log('ngOnInit directive');
  }

}
