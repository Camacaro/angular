import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  // Hey Typescrip, Sé que puede ser nulo, pero tratalo como si tuviera data
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.params
    //   .subscribe( ({ id }) => {
    //     console.log(id)
    //     this.paisService.getPaisPorAlpha(id)
    //       .subscribe( pais => {
    //         console.log(pais)
    //       })
    //   });

    // Refactor con RxJs - subcribe dentro de otro para devolver un solo observable
    this.activatedRoute.params
      .pipe(
        switchMap( (param) => this.paisService.getPaisPorAlpha(param.id) ),
        tap( (resp) => console.log(resp) )
      )
      .subscribe( (pais) => {
        this.pais = pais;
      });
  }

}
