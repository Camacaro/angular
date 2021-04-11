import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey = 'DJFlzUwZU7oceIPxuPKI2siknP7pFqlZ';
  private servicioUrl = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  public resultados: Gif[] = [];

  get historial(): string[]  {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    // if( localStorage.getItem('historial') ) {
    //   // !: confia en mi se lo que estoy haciendo, regresara un objeto
    //   // tslint:disable-next-line: no-non-null-assertion
    //   this._historial = JSON.parse( localStorage.getItem('historial')! );
    // }

    // tslint:disable-next-line: no-non-null-assertion
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    // tslint:disable-next-line: no-non-null-assertion
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarGifs( query: string = '' ): void {

    query = query.trim().toLocaleLowerCase();

    if ( !this._historial.includes(query) ){
      // Agregar al inicio
      this._historial.unshift( query );
      this._historial = this._historial.slice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      // tslint:disable-next-line: deprecation
      .subscribe( (resp) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }
}

