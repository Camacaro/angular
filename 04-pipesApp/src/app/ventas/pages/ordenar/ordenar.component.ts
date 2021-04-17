import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayuscula = false;
  ordenarPor = '';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ];

  toggleMayucula(): void {
    this.enMayuscula = !this.enMayuscula;
  }

  cambiarOrden(order: string): void {
    console.log(order)
    this.ordenarPor = order;
  }

}
