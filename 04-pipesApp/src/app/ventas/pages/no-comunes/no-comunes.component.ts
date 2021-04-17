import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  // i18nSelect

  nombre = 'Jesus';
  genero = 'masculino';

  nombre2 = 'Oriana';
  genero2 = 'femenino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla'
  };

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Eduardo', 'Jesus'];
  // con el signo # pasamos el valor que recibos en el HTML
  clientesMapa = {
    '=0': 'no tenemos ningún clinete esperando.',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando '
  };

  cambiarNombre(): void {
    this.nombre = this.nombre === 'Jesus' ? this.nombre2 : 'Jesus';
    this.genero = this.genero === 'masculino' ? this.genero2 : 'masculino';
  }

  borrarCliente(): void {
    this.clientes.pop();
  }

  // keyValue Pipe
  persona = {
    nombre: 'Jesus',
    edad: 25,
    direccion: 'Santiado, Chile'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      mombre: 'Aquaman',
      vuela: false
    },
    {
      nombre: 'Robin',
      vuela: false
    }
  ]

  // Async Pipe
  miObservable = interval(2000)
    .pipe( 
      tap( () => console.log('intervalo') ) 
    ); // emite valores 0,1,2,3,4,5,6... cada segundo

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3000)
  });

}
