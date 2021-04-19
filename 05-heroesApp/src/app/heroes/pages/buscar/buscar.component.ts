import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino = '';
  heroes: Heroe[] = [];
  heroeSeleccionado!: Heroe;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(): void {
    this.heroesService.getsugerencia( this.termino )
      .subscribe( heroes => this.heroes = heroes );
  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ): void {
    const heroe: Heroe = event.option.value;
    console.log(heroe)
    this.termino = heroe.superhero;

    this.heroesService.getHeroePorId( heroe.id! )
      .subscribe( (heroeResp) => this.heroeSeleccionado = heroeResp );
  }

}
