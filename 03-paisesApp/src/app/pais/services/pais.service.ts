import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private versionApiUrl = 'v2';
  private apiUrl = `https://restcountries.eu/rest/${this.versionApiUrl}`;

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<any> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get( url );

    // return this.http.get( url )
    //   .pipe(
    //     // atrapa el error y devuelve un observable array vacio
    //     catchError( err => of([]) )
    //   );
  }
}
