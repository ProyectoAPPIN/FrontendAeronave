import { TipoAlerta } from '../common/enums/tipoAlerta.enum';
import { Guid } from '../common/guid.class';

export class Alerta {
  Id: string;
  TipoAlerta: TipoAlerta;
  Titulo: string;
  Mensaje: string;

  constructor(_tipoAlerta: TipoAlerta, _titulo: string, _mensaje: string) {
    this.Id = Guid.newGuid();
    this.TipoAlerta = _tipoAlerta;
    this.Titulo = _titulo;
    this.Mensaje = _mensaje;
  }

  esExito() { return this.TipoAlerta === TipoAlerta.Exito; }

  esInformacion() { return this.TipoAlerta === TipoAlerta.Informacion; }

  esAdvertencia() { return this.TipoAlerta === TipoAlerta.Advertencia; }

  esError() { return this.TipoAlerta === TipoAlerta.Error; }
}
