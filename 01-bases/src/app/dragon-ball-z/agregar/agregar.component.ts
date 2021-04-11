import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  // @Input() agregar: void = () => {};
  @Input() personajes: Personaje[] = [];

  @Input() personaje: Personaje = {
    nombre: '',
    poder: 0
  };

  agregar(): void {
    if ( this.personaje.nombre.trim().length === 0 ) {
      return;
    }

    console.log('Agregar', this.personaje);
    console.log('Agregar personajes', this.personajes);

    this.personajes.push( this.personaje );

    this.personaje = {
      nombre: '',
      poder: 0
    };
  }
}

