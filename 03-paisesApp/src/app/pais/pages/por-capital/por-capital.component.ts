import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino = '';
  hayError = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar( termino: string ): void {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital( termino )
      .subscribe(
        (resp) => {
          this.paises = resp;
        },
        (err) => {
          this.hayError = true;
          this.paises = [];
        }
      );
  }
}
