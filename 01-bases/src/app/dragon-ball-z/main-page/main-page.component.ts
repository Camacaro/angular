import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personaje: Personaje = {
    nombre: 'Maestro Rochi',
    poder: 1000
  };

  constructor() {}

  // constructor( private bdzService: DbzService ) {}
  // get personajes(): Personaje[] {
  //   return this.bdzService.personajes;
  // }
}
