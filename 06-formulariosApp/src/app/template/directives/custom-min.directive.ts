import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validators } from '@angular/forms';

// customMin: Es el nombre a ubicar
// ngModel: Es por que lo nececita

@Directive({
  selector: '[customMin][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CustomMinDirective,
    multi: true
  }]
})
export class CustomMinDirective implements Validators {

  @Input() minimo!: number;

  constructor(){
    console.log('CustomMinDirective', this.minimo);
  }

  validate( control: FormControl ) {
    // Valor entrante por el formulario
    const inputValue = control.value;

    console.log( 'CustomMinDirective, validate', inputValue);
    console.log('CustomMinDirective, validate, minimo', this.minimo);

    // Hay un error en el customMin
    return (inputValue < this.minimo)
      ? { customMin: true }
      : null;
  }

}
