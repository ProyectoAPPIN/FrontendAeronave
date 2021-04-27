import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoAeronavesRoutingModule } from './listado-aeronaves-routing.module';
import { ListadoAeronavesComponent } from './listado-aeronaves.component';
import { MaterialModule } from 'src/app/material.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [ListadoAeronavesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NgxSpinnerModule,
    ListadoAeronavesRoutingModule
  ],  
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListadoAeronavesModule { }
