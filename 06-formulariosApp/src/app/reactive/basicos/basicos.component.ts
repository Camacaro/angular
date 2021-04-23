import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre      : new FormControl('RTX 4080ti'),
  //   precio      : new FormControl(1500),
  //   existencias : new FormControl(5),
  // });

  // [ valor, validador_sync, validador_async ]
  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [ , [ Validators.required, Validators.minLength(3) ]  ],
    precio: [ , [ Validators.required, Validators.min(0) ] ],
    existencias: [ , [ Validators.required, Validators.min(0) ] ]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Esta funcion espera que le mandes todos los valores iniciales del formulario
    // this.miFormulario.setValue({
    //   nombre: 'RTX 4080ti',
    //   precio: 1500,
    // });

    // Con esta podemos setear algunos valores
    this.miFormulario.reset({
      nombre: 'RTX 4080ti',
      precio: 1500,
    });
  }

  campoEsValido( campo: string ): boolean | null {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched;
  }

  guardar(): void {

    if ( this.miFormulario.invalid ) {
      // Tocar todas los campos del formulario para que salgan los errores
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
