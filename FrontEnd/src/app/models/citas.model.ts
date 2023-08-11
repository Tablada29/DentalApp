export class Citas{
    id_cita?: number;
    titulo?: string;
    fecha?: string;
    hora?: string;
    comentarios?: string;
    aceptacion?: string;
    estatus?: string;
    /* consultorio?: number; */
    /* nombre_consultorio?: string; */
    paciente?: number;
    nombre_paciente?: string;
    medico?: number;
    nombre_medico?: string;
    dia_preferencia?: string;
    horario_preferente?: string;

    /* constructor(){
        this.id_cita = null;
        this.titulo = null;
        this.fecha = null;
        this.hora = null;
        this.comentarios = null;
        this.aceptacion = null;
        this.estatus = null;
        this.consultorio = null;
        this.nombre_consultorio = null;
        this.paciente = null;
        this.nombre_paciente = null;
        this.medico = null;
        this.nombre_medico = null;
    } */
    constructor(){
        this.id_cita = null;
        this.titulo = null;
        this.fecha = null;
        this.hora = null;
        this.comentarios = null;
        this.aceptacion = null;
        this.estatus = null;
        this.paciente = null;
        this.nombre_paciente = null;
        this.medico = null;
        this.nombre_medico = null;
        this.dia_preferencia = null;
        this.horario_preferente = null;
    }
}