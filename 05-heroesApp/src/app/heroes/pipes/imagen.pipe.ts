import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

// Los pipes impuro son para que se dispare los pipe en cada 
// paso del ciclo de vida de angular, esto hace que 
// se rdireccione muchas veces el pipe
@Pipe({
  name: 'imagen',
  pure: false
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {

    console.log('Pipe impuro')

    if ( !heroe.id && !heroe.alt_img ) {
      return 'assets/no-image.png';
    } else if ( heroe.alt_img ) {
      return heroe.alt_img;
    } else {
      return `assets/heroes/${heroe.id}.jpg`;
    }
  }
}
