import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  colorPersonalizado = 'green';
  text1 = 'Jesus Camacaro';
  color = 'red';

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required ]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  tieneError( campo: string ): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarNombre(): void {
    this.text1 = Math.random().toString();
  }

  cambiarColor(): void {
    this.color =  '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));

  }

}
