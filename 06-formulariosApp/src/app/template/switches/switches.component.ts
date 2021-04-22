import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  persona = {
    genero: '', // default value F
    notificaciones: true,
  };

  terminosYCondiciones = false;

}
