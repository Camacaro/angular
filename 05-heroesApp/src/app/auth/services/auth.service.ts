import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth(): Auth { // | undefined
    // return this._auth ? { ...this._auth } : undefined;
    return { ...this._auth! };
  }

  constructor(private http: HttpClient) { }

  login(): Observable<Auth> {
    return this.http.get<Auth>( `${ this.baseUrl }/usuarios/1` )
      .pipe(
        tap( auth => this._auth = auth )
      );
  }

  logout(): void {
    this._auth = undefined;
  }
}
