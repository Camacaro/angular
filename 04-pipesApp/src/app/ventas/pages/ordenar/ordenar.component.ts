import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayuscula = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMayucula(): void {
    this.enMayuscula = !this.enMayuscula;
  }

}
