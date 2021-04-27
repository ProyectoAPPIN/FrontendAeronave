export class SodimacCommonConstants {
    
    static readonly pathApi = {        
        apiServicios : 'http://localhost:62419'
    };
  
    static readonly routing = {
      Usuario: '/menu/usuario',
      Categoria: '/menu/categoria',
      Subcategoria: '/menu/subcategoria',
      Cambiodeatributos: '/menu/cambioAtributos',
      Agregaroeliminarsurtidos: '/menu/agregaroeliminarS',
      SeguimientoDistribuciones:'/menu/seguimientoD',
      SeguimientoOC:'/menu/ordenesCompra',
      CambiodePrecios:'/menu/cambioPrecios',
      SeguimientoCambiodePrecios:'/menu/seguimientoCp',
      Solicitud:'/menu/SolicitudAlquiler',
      ListadoAeronaves:'/menu/listadoAeronaves',
    };
    
    static readonly pathPages = {
      home: 'home',
      login: 'login'     
    };

    static readonly pathMethods = {
      crearSolicitud: '/api/OC/CrearSolicitud',
    };  

    static readonly localStorageSet = {
      userHeaderName: 'LoginName',   
    };

   }
  