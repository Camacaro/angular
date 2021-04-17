import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[]): Heroe[] {

    // Ordenar por nombre, alfabeticamente
    // 1: si necesito si cambiarlo de lugar
    // -1: si necesito el cambio inverso
    heroes = heroes.sort( (a, b) => (a.nombre > b.nombre) ? 1 : -1 );

    return heroes;
  }

}
