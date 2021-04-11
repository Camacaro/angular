import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // @Input('alias-component-padre') nombre-en-esta-clase: any[] = [];
  // Va a venir desde el componente padre los datos
  // Padre -> Hijo
  @Input() personajes: Personaje[] = [];
}
