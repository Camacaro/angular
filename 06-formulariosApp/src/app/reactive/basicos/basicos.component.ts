import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre      : new FormControl('RTX 4080ti'),
  //   precio      : new FormControl(1500),
  //   existencias : new FormControl(5),
  // });

  // [ valor, validador_sync, validador_async ]
  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [ 'RTX 4080ti', [ Validators.required, Validators.minLength(3) ]  ],
    precio: [ 0, [ Validators.required, Validators.min(0) ] ],
    existencias: [ 0, [ Validators.required, Validators.min(0) ] ]
  });

  constructor(private formBuilder: FormBuilder) { }



}
