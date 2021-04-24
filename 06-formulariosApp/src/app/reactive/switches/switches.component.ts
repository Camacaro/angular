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
    notificaciones: [ true, Validators.required ],
    condiciones: [ false, Validators.required ]
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.miFormulario.reset( this.persona );
  }

}
