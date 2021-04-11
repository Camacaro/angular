import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  // @Output('alias-component-padre') nombre-en-esta-clase: any[] = [];
  // tslint da un error de no tener un prefijo de on
  // padre <- hijo
  // hijo -> padre
  @Output() nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  @Input() personaje: Personaje = {
    nombre: '',
    poder: 0
  };

  agregar(): void {
    if ( this.personaje.nombre.trim().length === 0 ) {
      return;
    }

    this.nuevoPersonaje.emit( this.personaje );

    this.personaje = {
      nombre: '',
      poder: 0
    };
  }
}

