import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudAlquilerRoutingModule } from './solicitud-alquiler-routing.module';
import { SolicitudAlquilerComponent } from './solicitud-alquiler.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [SolicitudAlquilerComponent],
  imports: [  
   
    SolicitudAlquilerRoutingModule,
    ReactiveFormsModule,
    CommonModule,   
    MaterialModule, 
    FormsModule
  ],  
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SolicitudAlquilerModule { }
