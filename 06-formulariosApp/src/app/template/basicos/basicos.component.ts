import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})

export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RXT 4018ti',
    precio: 1000,
    existencias: 10
  };

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls.producto?.invalid
      && this.miFormulario?.controls.producto?.touched;
  }

  precioValido(): boolean {
    // this.miFormulario?.controls.precio?.setErrors({precio: true});

    return this.miFormulario?.controls.precio?.value <= 0
      && this.miFormulario?.controls.precio?.touched;
  }

  // guardar( miFormulario: NgForm ): void {
  //   console.log(miFormulario.value)
  //   // console.log('submir hecho');
  // }

  guardar(): void {
    // console.log(this.miFormulario.value);
    console.log('Postep correcto')

    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    });
  }

}
