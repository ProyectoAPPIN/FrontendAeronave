import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SodimacCommonConstants } from '../common/constantes.class';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private http:HttpClient) 
    { }

    public obtenerListadoMenu(): Observable<any[]> {
      return this.http.get<any[]>('./assets/json/menu.json');
    } 

    public obtenerListadoAeronaves(): Observable<any[]> {
      return this.http.get<any[]>(SodimacCommonConstants.pathApi.apiServicios + '/api/Comunes/GetAeronaves');
    } 

    public obtenerListadoPilotos(): Observable<any[]> {
      return this.http.get<any[]>(SodimacCommonConstants.pathApi.apiServicios + '/api/Comunes/GetUsuario');
    }
}
