import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { MaterialModule } from 'src/app/material.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AlertService } from 'src/app/services/alert/alert.service';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MaterialModule,
    NgxSpinnerModule
  ],
  providers: [AlertService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuModule { }
