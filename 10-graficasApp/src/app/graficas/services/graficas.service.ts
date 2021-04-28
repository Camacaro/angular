import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

interface UserRedesSociales {
  facebook: number;
  youtube: number;
  whatsapp: number;
  'facebook-messenger': number;
  instagram: number;
}

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getUsuariosRedesSociales(): Observable<UserRedesSociales> {
    return this.http.get<UserRedesSociales>('http://localhost:3000/grafica');
  }

  getUsuariosRedesSocialesDonasData(): Observable<{ labels: string[]; values: any[]}> {
    return this.getUsuariosRedesSociales()
      .pipe(
        delay(1000),
        map( data => {
          const labels = Object.keys( data );
          const values = Object.values( data );
          return { labels, values };
        })
      );
  }
}
