import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // of
import { Country } from '../interfaces/pais.interface';
// import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private versionApiUrl = 'v2';
  private apiUrl = `https://restcountries.eu/rest/${this.versionApiUrl}`;

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url );

    // return this.http.get( url )
    //   .pipe(
    //     // atrapa el error y devuelve un observable array vacio
    //     catchError( err => of([]) )
    //   );
  }
}
