import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  // Cuando deja de escribir emitir valor
  debouncer: Subject<string> = new Subject();

  termino = '';

  ngOnInit(): void {
    this.debouncer
      .pipe(
        // Esperar 300 mlisegundos antes de emitir el subscribe
        debounceTime(300)
      )
      .subscribe( valor => {
        console.log('debouncer: ', valor);
        this.onDebounce.emit( valor );
      });
  }

  buscar(): void {
    this.onEnter.emit( this.termino );
  }

  teclaPresionada(event: any): void {
    // const valor = event.target.value;
    // console.log('teclaPresionada', valor);
    // console.log('teclaPresionada - termino', this.termino);

    // Emito el valor cada vez que escribo - se las envio al subscribe
    // a los que se encuentren subscritos
    this.debouncer.next( this.termino );
  }
}
