import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  // padre <- hijo | Enviar data al padre
  // @Output() nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  @Input() personaje: Personaje = {
    nombre: '',
    poder: 0
  };

  constructor(private dbzService: DbzService){}

  agregar(): void {
    if ( this.personaje.nombre.trim().length === 0 ) {
      return;
    }

    // this.nuevoPersonaje.emit( this.personaje );
    this.dbzService.agregarPersonajes( this.personaje );

    this.personaje = {
      nombre: '',
      poder: 0
    };
  }
}

