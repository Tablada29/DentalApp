import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaRecetaMedicoPage } from './nueva-receta-medico.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaRecetaMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaRecetaMedicoPageRoutingModule {}
