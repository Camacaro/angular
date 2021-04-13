import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino = '';
  hayError = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar( termino: string ): void {
    this.hayError = false;
    this.termino = termino;

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

}
