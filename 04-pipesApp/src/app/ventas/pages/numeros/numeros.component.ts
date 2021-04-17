import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent {

  // ECS2021 se pueden poner _ entre los numeros para poder diferenciar la cantidad
  ventasNetas = 25_677_489.5567;
  porcentaje = 0.4856;

}
