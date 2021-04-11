import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  // !: Non-null assertion operator (typescript) -> asegurarse que el elemento no es nulo
  // Buscar por referencia local - Busca en el HTML que quiera
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService){}

  // Foma  de hacerlo sin usar formModule or ngModule
  buscar(): void{

    const value = this.txtBuscar.nativeElement.value;

    if ( value.trim().length === 0 ) {
      return;
    }

    this.gifsService.buscarGifs(value);

    this.txtBuscar.nativeElement.value = '';
  }
}
