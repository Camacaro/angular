import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      .mapa-container {
        width: 100%;
        height: 100%;
      }

      .row {
        background-color: white;
        border-radius: 5px;
        bottom: 50px;
        left: 50px;
        padding: 10px;
        position: fixed;
        z-index: 999;
        width: 400px;
      }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  // Uso la referencia porque con el id si tengo mas referencia a esta componente
  // se ira repitiendo el id, con la referencia angular se encarga de qeu este componente
  // sea unico
  @ViewChild('mapa') divMapa!: ElementRef;

  mapa!: mapboxgl.Map;
  zoomLevel = 10;
  center: [number, number] = [ -70.6584204903743, -33.461761703487504 ];

  constructor() {}

  ngOnDestroy(): void {
    // remove the listeners
    this.mapa.off('zoom', () => {});
    this.mapa.off('zoomend', () => {});
    this.mapa.off('move', () => {});
  }

  // Se usa este porque necesitas esperar que la referencia se encuentre lista
  // para ser usado y con este metodo del ciclo de vida lo podemos obtener
  ngAfterViewInit(): void {
    // El token esta en el AppComponent
    // se pone de esta lado porque necesitamos el id  esperar a que se construya
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    this.mapa.on('zoom', (ev) => {
      const zoomActual = this.mapa.getZoom();
      this.zoomLevel = zoomActual;
    });

    this.mapa.on('zoomend', (ev) => {
      if ( this.mapa.getZoom() > 18 ) {
        this.zoomLevel = 18;
      }
    });

    // Moviento del mapa
    this.mapa.on('move', (ev) => {
      const { lng, lat } = ev.target.getCenter();
      this.center = [lng, lat];
    });
  }

  zoomOut(): void {
    this.mapa.zoomOut();
    this.zoomLevel = this.mapa.getZoom();
  }

  zoomIn(): void {
    this.mapa.zoomIn();
    this.zoomLevel = this.mapa.getZoom();
  }

  zoomCambio( value: string ): void {
    this.mapa.zoomTo( Number(value) );
  }

}
