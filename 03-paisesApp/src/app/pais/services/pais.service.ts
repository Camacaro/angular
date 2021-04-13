import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // of
import { Country } from '../interfaces/pais.interface';
// import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private versionApiUrl = 'v2';
  private apiUrl = `https://restcountries.eu/rest/${this.versionApiUrl}`;

  get httpParams(): HttpParams {
    return new HttpParams()
      .set('fields', 'capital;name;flag;population;alpha2Code');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );

    // return this.http.get( url )
    //   .pipe(
    //     // atrapa el error y devuelve un observable array vacio
    //     catchError( err => of([]) )
    //   );
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  getPaisPorAlpha(id: string): Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }

  buscarRegion(region: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/region/${ region }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }
}
