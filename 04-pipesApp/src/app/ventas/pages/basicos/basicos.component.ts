import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower = 'jesus';
  nombreUpper = 'JESUS';
  nombreComplete = 'jEsUs CaMaCaRo';

  fecha: Date = new Date(); // el dia de hoy

}
