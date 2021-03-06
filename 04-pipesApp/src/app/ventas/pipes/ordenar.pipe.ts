import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], orderPor: string = 'sin valor'): Heroe[] {

    switch (orderPor) {
      case 'nombre':
        // Ordenar por nombre, alfabeticamente
        // 1: si necesito si cambiarlo de lugar
        // -1: si necesito el cambio inverso
        return heroes.sort( (a, b) => (a.nombre > b.nombre) ? 1 : -1 );

      case 'vuela':
        // Con booleanos primero se ordena por false
        // return heroes.sort( (a, b) => (a.vuela > b.vuela) ? 1 : -1 );

        // De manera inversa para que true este de primero
        return heroes.sort( (a, b) => (a.vuela > b.vuela) ? -1 : 1 );

      case 'color':
        // de menor a mayor
        return heroes.sort( (a, b) => (a.color > b.color) ? 1 : -1 );

      default:
        return heroes;
    }
  }
}
