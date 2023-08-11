export class Medicamentos {
    id_medicamento?: number;
    medicamento?: string;
    dosis?: string;
    recomendaciones?: string;
    id_receta?: number;

    constructor(id_medicamento: number, medicamento: string, dosis: string, recomendaciones: string, id_receta: number){
        this.id_medicamento = id_medicamento;
        this.medicamento = medicamento;
        this.dosis = dosis;
        this.recomendaciones = recomendaciones;
        this.id_receta = id_receta;
    }
}