import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'dashboard',
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ],
    loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedModule )
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

/**
 * El useHash: true
 * Se usa cuando por ejemplo estoy en apache y no puedo
 * tocar el .htaccess para configurar que el index manejara
 * las rutas, entonces aplico el useHash: true
 *
 * Esto solucion es para navegadores viejos o cuando no tenemos
 * acceso a las rutas del apache en el .htaccess
 *
 *
 * Lo deje en false porque no quiero el # en la URL y el cambio
 * lo hare en el backend de node
 */
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
