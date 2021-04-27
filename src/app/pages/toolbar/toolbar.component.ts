import { Component, OnInit } from '@angular/core';
import {TooltipPosition} from '@angular/material/tooltip';
import {FormControl} from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Constantes } from 'src/app/utils/constantes.util';
import { Router } from '@angular/router';
import { SodimacCommonConstants } from 'src/app/common/constantes.class';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  //usuario:string;
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  data: any;
  rol: any;
  usuarioLogeado: string;
  nombre:string;
  cargo:string;



  constructor(
    private autenticacionService:AuthenticationService,
    private _routeServices: Router
    ) { }

  ngOnInit(): void {
    this.data = JSON.parse(sessionStorage.getItem(Constantes.DATOS_SESION_USUARIO));
    this.rol = JSON.parse(sessionStorage.getItem(Constantes.DATOS_SESION_ROL));
    
    this.usuarioLogeado = this.data;
    this.nombre = this.data.Name;  
    this.cargo = this.data.Cargo;  

  }
  cerrarAplicacion(){
    this._routeServices.navigate([SodimacCommonConstants.pathPages.login]);
  }
}
