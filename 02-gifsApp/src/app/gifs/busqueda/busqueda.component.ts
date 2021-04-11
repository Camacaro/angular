import { Component, ElementRef, ViewChild } from '@angular/core';

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

  // Foma  de hacerlo sin usar formModule or ngModule
  buscar(): void{
    console.log();

    const value = this.txtBuscar.nativeElement.value;

    console.log(value);

    this.txtBuscar.nativeElement.value = '';
  }
}
