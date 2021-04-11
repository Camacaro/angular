import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey = 'DJFlzUwZU7oceIPxuPKI2siknP7pFqlZ';
  private url = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  public resultados: Gif[] = [];

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

    this.http.get<SearchGifsResponse>(`${this.url}/search?api_key=${this.apiKey}&q=${query}&limit=10`)
      // tslint:disable-next-line: deprecation
      .subscribe( (resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
      });
  }
}
