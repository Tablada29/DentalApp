import { Medicamentos } from './medicamentos.model';
export class Recetas {
    id_receta?: number;
    fecha?: string;
    id_paciente?: number;
    id_medico?: number;
    id_cita?: number;
    medicamentos?: Medicamentos[];
    nombre_paciente?: string;
    nombre_medico?: string;

    constructor(){
        this.id_receta = null;
        this.fecha = "";
        this.id_paciente = null;
        this.id_medico = null;
        this.id_cita = null;
        this.medicamentos = [];
        this.nombre_paciente = "";
        this.nombre_medico = "";
    }
}