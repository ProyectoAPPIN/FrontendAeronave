import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { SodimacCommonConstants } from 'src/app/common/constantes.class';

@Injectable()
export class BaseService {

  constructor() { }

  protected generateBasicHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }
  protected generateAuthHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    const headerchild = headers.append('UsuarioSesion', sessionStorage.getItem(SodimacCommonConstants.localStorageSet.userHeaderName));
    return headerchild;
  }
  
}
