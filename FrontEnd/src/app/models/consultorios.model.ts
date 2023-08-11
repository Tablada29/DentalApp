import { Direcciones } from './direcciones.model';
import { Telefonos } from './telefonos.model';
export class Consultorio{
    id_consultorio?: number;
    nombre_consultorio?: string;
    direccion?: Direcciones;
    telefonos?: Telefonos[];

    constructor(){
        this.id_consultorio = null;
        this.nombre_consultorio = null;
        this.direccion = null;
        this.telefonos = null;
    }
}