import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  // @ViewChild('miFormulario') miFormulario!: NgForm;

  nuevoJuego = '';

  persona: Persona = {
    nombre: 'Jesus',
    favoritos: [
      {
        id: 1,
        nombre: 'Metal Gaer'
      },
      {
        id: 1,
        nombre: 'Death Stranding'
      },
    ]
  };


  guardar(): void {
    console.log('postetado');
  }

  eliminar( index: number ): void {
    // Borrar 1, el indice de de donde se mando
    this.persona.favoritos.splice(index, 1);
  }

  agregarJuego(): void {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    };

    this.persona.favoritos.push( {...nuevoFavorito} );

    this.nuevoJuego = '';
  }

}
