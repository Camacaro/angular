import { Component,  ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor {
  color?: string;
  marker?: mapboxgl.Marker;
  centro?: [number, number];
}
@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
     `
      .mapa-container {
        width: 100%;
        height: 100%;
      }

      .list-group {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 99;
      }

      li {
        cursor: pointer;
      }
    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  // Uso la referencia porque con el id si tengo mas referencia a esta componente
  // se ira repitiendo el id, con la referencia angular se encarga de qeu este componente
  // sea unico
  @ViewChild('mapa') divMapa!: ElementRef;

  mapa!: mapboxgl.Map;
  zoomLevel = 10;
  center: [number, number] = [ -70.6584204903743, -33.461761703487504 ];

  // Arreglo de marcadores
  marcadores: MarcadorColor[] = [];

  constructor() { }

  ngAfterViewInit(): void {
    // El token esta en el AppComponent
    // se pone de esta lado porque necesitamos el id  esperar a que se construya
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    const makerHtml: HTMLElement = document.createElement('div');
    makerHtml.innerHTML = 'Hola Mundo';
    // Personalizar el Ping del marcador
    // new mapboxgl.Marker({
    //   element: makerHtml
    // })

    // new mapboxgl.Marker()
    //   .setLngLat( this.center )
    //   .addTo( this.mapa );

    this.leerLocalStorage();
  }

  agregarMarcador(): void {

    // color random hexadecimal
    const color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));

    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color
    })
      .setLngLat( this.center )
      .addTo( this.mapa );

    this.marcadores.push({ color, marker: nuevoMarcador });

    this.guardarMarcadoresLocalStorage();
  }

  irMarcador(marcador: mapboxgl.Marker): void {
    this.mapa.flyTo({
      center: marcador.getLngLat()
    });
  }

  guardarMarcadoresLocalStorage(): void {

    const lngLatArr: MarcadorColor[] = [];

    this.marcadores.forEach( m => {
      const color = m.color;
      const { lng, lat } = m.marker!.getLngLat();

      lngLatArr.push({
        color,
        centro: [ lng, lat ]
      });

      localStorage.setItem('marcadores', JSON.stringify( lngLatArr ) );
    });

  }

  leerLocalStorage(): void {

    const marcadores = localStorage.getItem('marcadores');

    if ( !marcadores ) {
      return;
    }

    const lngLatArr: MarcadorColor[] = JSON.parse( marcadores );

    lngLatArr.forEach( m => {
      const marcador = new mapboxgl.Marker({
          draggable: true,
          color: m.color
        })
          .setLngLat( m.centro! )
          .addTo( this.mapa );

      this.marcadores.push({
        marker: marcador,
        color: m.color
      });
    });


  }

}
