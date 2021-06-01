import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { AuthResponse, Usuario } from '../interfaces/interfaces';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario(): Usuario {
    return { ...this._usuario };
  }

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string): Observable<boolean|string> {
    const url = `${ this.baseUrl }/auth`;

    const body = {email, password};

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( (resp) => {
          if ( resp.ok ) {
            localStorage.setItem('token', resp.token!);
            this._usuario = {
              name: resp.name!,
              uid: resp.uid!
            };
          }
        }),
        map( (resp) => resp.ok ),
        catchError( e => of(e.error.msg) )
      );
  }

  validarToken(): Observable<boolean> {
    const url = `${ this.baseUrl }/auth/renew`;

    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '' );

    return this.http.get<AuthResponse>( url, { headers } )
      .pipe(
        map( resp => {
          localStorage.setItem('token', resp.token!);
          this._usuario = {
            name: resp.name!,
            uid: resp.uid!
          };
          return resp.ok;
        } ),
        catchError( err => of(false) )
      );
  }
}
