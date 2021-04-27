import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';

const routes: Routes = [
  { 
    path: '', 
    component: MenuComponent,
    children:[
      {
        path:'ordenesCompra',
        loadChildren:()=>
        import ('../../pages/ordenes-compra/ordenes-compra.module').then(
          m=> m.OrdenesCompraModule
        )
      },
      { 
        path: 'listadoAeronaves', 
        loadChildren: () => 
        import('../../pages/listado-aeronaves/listado-aeronaves.module').then
        (m => m.ListadoAeronavesModule) 
      },
      { 
        path: 'SolicitudAlquiler', loadChildren: () => 
        import('../../pages/solicitud-alquiler/solicitud-alquiler.module').then
        (m => m.SolicitudAlquilerModule) }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
