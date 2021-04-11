import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  // One way data
  // <input
  //   placeholder="Nombre"
  //   type="text"
  //   [value]="personaje.nombre"
  // />

  personaje: Personaje = {
    nombre: 'Trucks',
    poder: 14000
  };

  // Manual - <form (submit)="agregar($event)">
  // agregar(event: any ): void {
  //   event.preventDefault();
  //   console.log('HEY!!!!')
  //   console.log(event)
  // }

  // FormsModule - <form (ngSubmit)="agregar()">
  agregar(): void {
    console.log( this.personaje )
  }

  cambiarNombre(event: any): void {
    console.log(event.target.value)
  }

}
