import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SodimacCommonConstants } from 'src/app/common/constantes.class';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  
  public obtenerJsonTiendas(): Observable<any[]> {
    return this.http.get<any[]>('./assets/json/tiendas.json');
  }

  public obtenerJsonTiendas1(): Observable<any[]> {
    return this.http.get<any[]>(SodimacCommonConstants.pathApi.apiServicios + '/api/Tienda/ConsultarTiendas');
  }

}
