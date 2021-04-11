import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegueta',
      poder: 7500
    }
  ];

  personaje: Personaje = {
    nombre: 'Maestro Rochi',
    poder: 1000
  };

  constructor( private bdzService: DbzService ) {

  }

  agregarNuevoPersonaje( argumento: Personaje ): void{
    this.personajes.push(argumento);
  }

  // One way data
  // <input
  //   placeholder="Nombre"
  //   type="text"
  //   [value]="personaje.nombre"
  // />

  // personaje: Personaje = {
  //   nombre: '',
  //   poder: 0
  // };

  // Manual - <form (submit)="agregar($event)">
  // agregar(event: any ): void {
  //   event.preventDefault();
  //   console.log('HEY!!!!')
  //   console.log(event)
  // }

  // FormsModule - <form (ngSubmit)="agregar()">
  // agregar(): void {
  //   if ( this.personaje.nombre.trim().length === 0 ) {
  //     return;
  //   }

  //   this.personajes.push( this.personaje );

  //   this.personaje = {
  //     nombre: '',
  //     poder: 0
  //   }
  // }

  // cambiarNombre(event: any): void {
  //   console.log(event.target.value)
  // }

}
