import { Directive, OnInit, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appErrMsg]'
})
export class ErrMsgDirective implements OnInit {

  private _color = 'red';
  private _mensaje = 'Este campo es necesario';

  htmlElemt: ElementRef<HTMLElement>;
  // @Input() color = 'red';
  @Input() set color( value: string ) {
    this._color = value;
    this.setColor();
  }

  // @Input() mensaje = 'Este campo es necesario';
  @Input() set mensaje( value: string ) {
    this._mensaje = value;
    this.setMensaje();
  }

  @Input() set valido( value: boolean ) {
    if ( value ) {
      this.htmlElemt.nativeElement.classList.add('hidden');
    } else {
      this.htmlElemt.nativeElement.classList.remove('hidden');
    }
  }

  constructor(
    private el: ElementRef<HTMLElement>
  ) {
    // Recibo el elemento HTML de quien use la directiva
    this.htmlElemt = el;
  }

  // Esto lo cambiamos por los input seters
  // ngOnChanges(changes: SimpleChanges): void {

  //   if ( changes.mensaje ) {
  //     const mensaje = changes.mensaje.currentValue;
  //     this.htmlElemt.nativeElement.innerText = mensaje;
  //   }

  //   if ( changes.color ) {
  //     const color = changes.color.currentValue;
  //     this.htmlElemt.nativeElement.style.color = color;
  //   }
  // }

  ngOnInit(): void {
    console.log('ngOnInit directive');
    this.setColor();
    this.setMensaje();
    this.setClass();
  }

  setColor(): void {
    this.htmlElemt.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElemt.nativeElement.innerText = this._mensaje ;
  }

  setClass(): void {
    this.htmlElemt.nativeElement.classList.add('form-text');
  }

}
