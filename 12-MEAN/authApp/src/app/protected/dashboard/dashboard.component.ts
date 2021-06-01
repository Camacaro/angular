import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { Usuario } from '../../auth/interfaces/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      * {
        margin: 15px
      }
    `
  ]
})
export class DashboardComponent {

  get usuario(): Usuario {
    return this.authService.usuario;
  }

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  logout(): void {
    this.router.navigateByUrl('/auth');
  }


}
