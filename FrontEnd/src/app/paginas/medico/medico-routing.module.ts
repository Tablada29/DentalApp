import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicoPage } from './medico.page';

const routes: Routes = [
  {
    path: '',
    component: MedicoPage,
    children: [

      {
        path: 'inicio',
        loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: '',
        redirectTo: 'medico/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'medico',
    redirectTo: 'medico/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicoPageRoutingModule {}
