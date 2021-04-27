import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudAlquilerComponent } from './solicitud-alquiler.component';

const routes: Routes = [{ path: '', component: SolicitudAlquilerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudAlquilerRoutingModule { }
