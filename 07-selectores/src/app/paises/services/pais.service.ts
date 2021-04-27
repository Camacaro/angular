import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaisSmall, Pais } from '../interfaces/paises.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private baseUrl = 'https://restcountries.eu/rest/v2';
  private _regiones: string[] = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];

  get regiones(): string[] {
    return [ ...this._regiones ];
  }

  constructor(
    private http: HttpClient
  ) { }

  getPaisesPorRegion( region: string ): Observable<PaisSmall[]> {
    const url = `${ this.baseUrl }/region/${ region }?fields=alpha3Code;name`;

    return this.http.get<PaisSmall[]>(url);
  }

  getPaisesPorCodigo( code: string ): Observable<Pais | null> {

    if ( !code ) {
      return of(null);
    }

    const url = `${ this.baseUrl }/alpha/${ code }`;

    return this.http.get<Pais>(url);
  }
}
