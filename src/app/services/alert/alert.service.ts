import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Subject, Observable } from 'rxjs';
import { Alerta } from 'src/app/models/alerta.class';
import { TipoAlerta } from 'src/app/common/enums/tipoAlerta.enum';

@Injectable()
export class AlertService  extends BaseService{
  private subject = new Subject<Alerta>();
    /**
   * Envía una alerta de advertencia a los suscriptores
   * @param _mensaje
   */
     enviarAlertaAdvertencia(_mensaje: string) {
      this.subject.next(new Alerta(TipoAlerta.Advertencia, null, _mensaje));
    }
}
