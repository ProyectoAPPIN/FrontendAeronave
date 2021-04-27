import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ContainerComponent } from './pages/container/container.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CarruselComponent } from './pages/carrusel/carrusel.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { ReactiveFormsModule } from '@angular/forms';

/*ngx spinner*/
import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ToolbarComponent,
    FooterComponent,
    CarruselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    HttpClientModule,
    MatFileUploadModule,
    NgxSpinnerModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
