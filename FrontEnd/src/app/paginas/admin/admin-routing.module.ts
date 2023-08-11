import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children: [
      {
        path: 'usuarios',
        loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
      },
      {
        path: '',
        redirectTo: 'admin/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'admin',
    redirectTo: 'admin/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
