import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ false, Validators.required ],
    condiciones: [ false, Validators.requiredTrue ]
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset( this.persona );

    // Escucho cualquier cambio todo el formulario
    this.miFormulario.valueChanges.subscribe( ({ condiciones, ...rest }) => {
      this.persona = rest;
    })

    // Escucho cualquier cambio en un campo especifico
    // this.miFormulario.get('condiciones')?.valueChanges.subscribe( form => {
    //   console.log(form)
    // })
  }

  guardar() {
    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;

    this.persona = formValue
  }

}
