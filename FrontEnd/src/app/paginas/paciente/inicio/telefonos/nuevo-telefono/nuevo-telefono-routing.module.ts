import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoTelefonoPage } from './nuevo-telefono.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoTelefonoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoTelefonoPageRoutingModule {}
