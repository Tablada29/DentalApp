export class Usuario{
    id_usuario?: number;
    usuario?: string;
    correo?: string;
    pass?: string;
    estatus_registro?: string;
    estado_actividad?: string;
    rol?: string;
    nombre?: string;
    apellido_materno?: string;
    apellido_paterno?: string;
    sexo?: string;
    edad?: number;
    fecha_nacimiento?: string;
    curp?: string;
    cedula?: string;
    
    constructor(){
        this.id_usuario = null;
        this.usuario = null;
        this.correo = null;
        this.pass = null,
        this.estatus_registro = null;
        this.estado_actividad = null;
        this.rol = null;
        this.nombre = null;
        this.apellido_materno = null;
        this.apellido_paterno = null;
        this.sexo = null;
        this.edad = null,
        this.fecha_nacimiento = null;
        this.curp = null;
        this.cedula = null;
    }
}