import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerminosUsoPage } from './terminos-uso.page';

const routes: Routes = [
  {
    path: '',
    component: TerminosUsoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminosUsoPageRoutingModule {}
