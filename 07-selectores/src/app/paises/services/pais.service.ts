import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaisSmall, Pais } from '../interfaces/paises.interface';
import { combineLatest, Observable, of } from 'rxjs';

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

  getPaisesPorCodigoSmall( code: string ): Observable<PaisSmall> {

    const url = `${ this.baseUrl }/alpha/${ code }?fields=alpha3Code;name`;

    return this.http.get<PaisSmall>(url);
  }

  getPaisesPorCodigos( borders: string[] ): Observable<PaisSmall[]>  {

    if ( !borders ) {
      return of([]);
    }

    const peticiones: Observable<PaisSmall>[] = [];

    borders.forEach( border => {

      const peticion = this.getPaisesPorCodigoSmall(border);

      peticiones.push(peticion);
    });

    // Las respuestas vendran en orden a como se armo el arreglo de peticiones
    return combineLatest( peticiones );
  }
}
