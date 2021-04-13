import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'jesus cAmacAro';
  valor = 1000;
  obj = {
    nombre: 'Jesus'
  }

  mostrarNombre(): void {
    console.log(this.nombre)
    console.log(this.valor)
    console.log(this.obj)
  }
}
