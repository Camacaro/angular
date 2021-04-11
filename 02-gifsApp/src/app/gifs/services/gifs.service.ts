import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey = 'DJFlzUwZU7oceIPxuPKI2siknP7pFqlZ';
  private _historial: string[] = [];

  get historial(): string[]  {
    return [...this._historial];
  }

  constructor(private http: HttpClient) { }

  buscarGifs( query: string = '' ): void {

    query = query.trim().toLocaleLowerCase();

    if ( !this._historial.includes(query) ){
      // Agregar al inicio
      this._historial.unshift( query );
      this._historial = this._historial.slice(0, 10);
    }

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=DJFlzUwZU7oceIPxuPKI2siknP7pFqlZ&q=one piece&limit=10`)
      .subscribe( (resp: any) => {
        console.log(resp.data)
      });
  }
}
