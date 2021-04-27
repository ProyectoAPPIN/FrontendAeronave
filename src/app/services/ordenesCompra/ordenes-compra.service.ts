import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SodimacCommonConstants } from 'src/app/common/constantes.class';
import { ObjetoCargueMasivo } from 'src/app/models/ordenesCompraCargue';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class OrdenesCompraService extends BaseService{

  constructor(
    private http:HttpClient) { 
      super();
    }

  public cargueMasivoExcel(datos: any, usuario:string): Observable<any> {
    let objeto = new ObjetoCargueMasivo();
    objeto.datos = datos;
    objeto.usuario=usuario;

    console.log(objeto);

    return this.http.post<any>(SodimacCommonConstants.pathApi.apiServicios + '/api/OC/CrearSolicitud', objeto, {});
  }

  // public cargueMasivoExcel(datos: any, usuario:string): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       'Accept': 'application/json'
  //     })
  //   };
  //   let params = {
  //     datos,
  //     usuario
  //   }
  //   return this.http.post<any>(SodimacCommonConstants.pathApi.apiServicios + '/api/OC/CrearSolicitud', params, httpOptions);
  // }


}




