export interface OrdenesCompra {
  SKU: string;
  DESCRIPCION: string;
  CodProveedor: string;
  NombreProveedor: string;
  REFPROV: string;
  CLACOM: string;
  REPOSICION: string;
  TipoInventario: string;
  CostoVigenteCadena: string;
  PrecioPublicoBogota: string;
  UE: string;
  ORIGEN: string;
  CODBARRAS: string;
  FechaCalendario: string;
  LeadTime: string;
  MetodoDistribucion: string;
  Foto: string;
  TipoSolicitud: string;
  Generarenfecha: string;
  Entregarenfecha: string;
  EntregaDirecta: string;
  Notasalproveedor: string;
  ControlFoto: string;
  Costoespecial: string;
  BODEGAS: string;
  CANTIDADESTOTALES: string;
  COSTOTOTAL: string;
}

export class CargueMasivo {  
  Objeto?: Dato;
}

export class Dato {
  Dato?: any;
}

export class ObjetoCargueMasivo{
  datos?:any;
  usuario:string;
}