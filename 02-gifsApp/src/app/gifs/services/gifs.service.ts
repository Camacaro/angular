import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];

  get historial(): string[]  {
    return [...this._historial];
  }

  constructor() { }

  buscarGifs( query: string = '' ): void {

    query = query.trim().toLocaleLowerCase();

    if ( !this._historial.includes(query) ){
      // Agregar al inicio
      this._historial.unshift( query );
      this._historial = this._historial.slice(0, 10);
    }
  }
}
