import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';
import { MenuService } from 'src/app/services/menu.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitud-alquiler',
  templateUrl: './solicitud-alquiler.component.html',
  styleUrls: ['./solicitud-alquiler.component.css']
})
export class SolicitudAlquilerComponent implements OnInit {

  dataSource:any=[];
  dataSourcePilotos:any=[];

  constructor(private autSvc: MenuService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.obtenerAeronaves();
    this.obtenerPilotos();
  }

  public ordenesCompraForm = new FormGroup({
    avion: new FormControl(''),
    fecha: new FormControl(''),
    piloto: new FormControl('')
  });


  obtenerAeronaves() {
    this.spinner.show();
    this.autSvc.obtenerListadoAeronaves().pipe(
      finalize(() => {
        console.log('Servicio completado correctamente');
        setTimeout(() => {
          this.spinner.hide();
        }, 500);
      }
      )).subscribe(resp => {        
        this.dataSource = resp;     
        console.log(this.dataSource);
      });
  }
  obtenerPilotos() {
    this.spinner.show();
    this.autSvc.obtenerListadoPilotos().pipe(
      finalize(() => {
        console.log('Servicio completado correctamente');
        setTimeout(() => {
          this.spinner.hide();
        }, 500);
      }
      )).subscribe(resp => {        
        this.dataSourcePilotos = resp;     
        console.log(this.dataSourcePilotos);
      });
  }
  registrarSolicitud(){
    Swal.fire({
      title: 'Solicitud registrada exitosamente',
      width: 300,         
      confirmButtonText: `Ok`,          
    }).then((result) => {         
      if (result.isConfirmed) {        
      }      
    })      
  }
}
