import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1> {{titulo}} </h1>
    <h3>La base es: <strong>{{base}}</strong> </h3>

    <!-- <button (click)="sumar()"> +1 </button> -->
    <button (click)="acumular(base)"> +{{base}} </button>

    <span> {{numero}} </span>

    <!-- <button (click)="restar();"> -1 </button> -->
    <button (click)="acumular(-base);"> -{{base}} </button>
  `
})
export class ContatorComponent {
  titulo: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  sumar(): void {
    this.numero += 1;
  }

  restar(): void {
    this.numero -= 1;
  }

  acumular( valor: number ): void {
    this.numero += valor;
  }
}