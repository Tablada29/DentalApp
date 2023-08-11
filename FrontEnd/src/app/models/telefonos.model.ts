export class Telefonos {
    id_telefono?: number;
    telefono?: string;
    referencia?: string;
    id_usuario?: number;

    constructor(id: number, tel: string, ref: string, usuario: number){
        this.id_telefono = id;
        this.telefono = tel;
        this.referencia = ref;
        this.id_usuario = usuario;
    }
}