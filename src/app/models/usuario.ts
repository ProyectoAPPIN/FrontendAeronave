export interface Usuario {
    EstadoProceso : boolean; 
    Mensaje : string; 
    Data : DatosUsuario; 
}

export interface DatosUsuario {
    LoginName : boolean; 
    Name : string; 
    Mail : number; 
    Cargo : number; 
}
