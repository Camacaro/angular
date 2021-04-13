import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  termino = '';
  hayError = false;
  paises: Country[] = [];

  paisesSugeridos: Country[] = [];
  mostrarSugerencias = false;

  constructor(private paisService: PaisService) { }

  buscar( termino: string ): void {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;

    this.paisService.buscarPais( termino )
      .subscribe(
        (resp) => {
          console.log(resp);
          this.paises = resp;
        },
        (err) => {
          this.hayError = true;
          this.paises = [];
        }
      );

    // this.paisService.buscarPais( this.termino )
    //   .subscribe({
    //     next: (resp) => console.log(resp)
    //   });
  }

  sugerencias( termino: string ): void {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino)
      .subscribe(
        paises => this.paisesSugeridos = paises.splice(0, 5),
        () => this.paisesSugeridos = []
      );
  }

  buscarSugerido(termino: string): void {
    this.buscar(termino);
  }

}
