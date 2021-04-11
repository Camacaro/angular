import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  get historial() {
    return this.gifsService.historial;
  }

  // Este servicio lo puedo usar ya que esta de manera global por el {providedIn: 'root'}
  constructor(private gifsService: GifsService) {}

  ngOnInit(): void {
  }

}
