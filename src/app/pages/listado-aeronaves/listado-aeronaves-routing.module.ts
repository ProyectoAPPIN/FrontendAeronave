import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoAeronavesComponent } from './listado-aeronaves.component';

const routes: Routes = [{ path: '', component: ListadoAeronavesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoAeronavesRoutingModule { }
