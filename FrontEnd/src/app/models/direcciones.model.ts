export class Direcciones{
    id_direccion?: number;
    calle?: string;
    numero_exterior?: string;
    numero_interior?: string;
    colonia?: string;
    ciudad?: string;
    codigo_postal?: string;
    estado?: string;
    pais?: string;
    id_usuario?: number;
    address_of?: string;

    constructor(id: number, calle: string, num_ext: string, num_int: string, col: string, ciudad: string, cp: string, estado: string, pais: string, id_usuario: number, address_of: string){
        this.id_direccion = id;
        this.calle = calle;
        this.numero_exterior = num_ext;
        this.numero_interior = num_int;
        this.colonia = col;
        this.ciudad = ciudad;
        this.codigo_postal = cp;
        this.estado = estado;
        this.pais = pais;
        this.id_usuario = id_usuario;
        this.address_of = address_of;
    }

}