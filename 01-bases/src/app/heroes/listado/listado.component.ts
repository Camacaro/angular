import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';

  borrarHero(): void {
    // console.log('borrando');
    // this.heroes = this.heroes.slice(1, 3);
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
