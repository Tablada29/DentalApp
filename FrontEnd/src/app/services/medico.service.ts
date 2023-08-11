import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  URL = "http://desaingxalapa.com/dental/appdata_dental/nuevas_consultas/consultas_medico/";

  constructor(private http: HttpClient) { }

  cargarCitas(usuario){
    return this.http.post(`${this.URL}consultar_citas.php`, JSON.stringify(usuario));
  }

  guardarReceta(receta){
    return this.http.post(`${this.URL}guardar_receta.php`, JSON.stringify(receta));
  }

  guardarMedicamento(medicamento){
    return this.http.post(`${this.URL}guardar_medicamento.php`, JSON.stringify(medicamento));
  }

  eliminarReceta(receta){
    return this.http.post(`${this.URL}eliminar_receta_medico.php`, JSON.stringify(receta));
  }

  cargarRecetas(cita){
    return this.http.post(`${this.URL}cargar_recetas_medico.php`, JSON.stringify(cita));
  }

  cargarMedicamentos(receta){
    return this.http.post(`${this.URL}cargar_medicamentos.php`, JSON.stringify(receta));
  }
}
