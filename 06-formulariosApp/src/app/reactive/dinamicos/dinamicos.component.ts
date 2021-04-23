import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [ , [ Validators.required, Validators.minLength(3) ]  ],
    favoritos: this.formBuilder.array( [
      [ 'Metal Gear', Validators.required ],
      [ 'Deat Stranding', Validators.required ]
    ], Validators.required )
  });

  // el control puede ser lo que sea, un input, checbox, etc
  nuevoFavorito: FormControl = this.formBuilder.control('', Validators.required);

  get favoritosArr(): FormArray {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { }

  guardar(): void {

    if ( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log('Valido', this.miFormulario.value);
  }

  campoEsValido( campo: string ): boolean | null {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito(): void {
    if ( this.nuevoFavorito.invalid ) {
      return;
    }

    // this.favoritosArr.push( new FormControl(
    //   this.nuevoFavorito.value, Validators.required
    // ));

    // Estos dos son iguales

    this.favoritosArr.push( this.formBuilder.control(
      this.nuevoFavorito.value, Validators.required
    ) );

    this.nuevoFavorito.reset();
  }

  borrar(index: number ): void {
    // this.favoritosArr.controls.splice(index, 1);
    this.favoritosArr.removeAt(index);
  }


}
