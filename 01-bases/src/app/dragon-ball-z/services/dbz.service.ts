import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
@Injectable()
export class DbzService {

  // standar: se unsa el _ undersocoper para una propiedad privada
  // tslint:disable-next-line: variable-name
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegueta',
      poder: 7500
    }
  ];

  get personajes(): Personaje[] {
    // Rompo la referencia con el this._personajes
    return [...this._personajes];
  }

  constructor() {
    console.log('Servicios inicializado');
  }

  agregarPersonajes( personaje: Personaje ): void {
    this._personajes.push( personaje );
  }

}
