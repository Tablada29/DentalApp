import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesCitaPage } from './detalles-cita.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesCitaPage,

    children: [
      {
        path: 'receta',
        loadChildren: () => import('./receta/receta.module').then( m => m.RecetaPageModule)
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesCitaPageRoutingModule {}
