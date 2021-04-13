import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  }
}
