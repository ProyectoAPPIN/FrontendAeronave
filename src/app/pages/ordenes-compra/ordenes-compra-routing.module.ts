import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdenesCompraComponent } from './ordenes-compra.component';

const routes: Routes = [{ path: '', component: OrdenesCompraComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdenesCompraRoutingModule { }
