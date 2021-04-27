import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SodimacCommonConstants } from '../common/constantes.class';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  

  public autenticacion(usuario:string, clave:string): Observable<any[]> {
    return this.http.get<any[]>(SodimacCommonConstants.pathApi.apiServicios + '/api/Comunes/ValidaUsuario?'+`usuario=${usuario}`+`&clave=${clave}`);
  } 
}
