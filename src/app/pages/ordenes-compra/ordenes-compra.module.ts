import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdenesCompraRoutingModule } from './ordenes-compra-routing.module';
import { OrdenesCompraComponent } from './ordenes-compra.component';
import { MaterialModule } from 'src/app/material.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [OrdenesCompraComponent],
  imports: [
    CommonModule,
    OrdenesCompraRoutingModule,
    MaterialModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    FormsModule
  ],  
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrdenesCompraModule { }
