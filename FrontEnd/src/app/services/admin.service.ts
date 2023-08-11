import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  URL = "http://desaingxalapa.com/dental/appdata_dental/nuevas_consultas/consultas_admin/";

  constructor(private http: HttpClient) { }

  cargarUsuarios(){
    return this.http.get(`${this.URL}consultar_usuarios.php`);
  }

  cargarCitas(){
    return this.http.get(`${this.URL}consultar_citas.php`);
  }

  cargarQuejas(){
    return this.http.get(`${this.URL}consultar_quejas.php`);
  }

  cargarDentistas(){
    return this.http.get(`${this.URL}consultar_dentistas.php`);
  }

  cargarConsultorios(){
    return this.http.get(`${this.URL}consultar_consultorios.php`);
  }
  
  cargarPacientes(){
    return this.http.get(`${this.URL}consultar_pacientes.php`);
  }

  agendarCita(cita){
    return this.http.post(`${this.URL}agendar_cita.php`, JSON.stringify(cita));
  }

  confirmarCita(cita){
    return this.http.post(`${this.URL}confirmar_cita.php`, JSON.stringify(cita));
  }

  agregarUsuario(nuevo_usuario){
    return this.http.post(`${this.URL}agregar_usuario.php`, JSON.stringify(nuevo_usuario));
  }

  cancelarCita(cita){
    return this.http.post(`${this.URL}cancelar_cita.php`, JSON.stringify(cita));
  }

  finalizarCita(cita){
    return this.http.post(`${this.URL}finalizar_cita.php`, JSON.stringify(cita));
  }

  actalizarUsuario(usuario){
    return this.http.post(`${this.URL}actualizar_usuario.php`, JSON.stringify(usuario));
  }

  eliminarUsuario(usuario){
    return this.http.post(`${this.URL}eliminar_usuario.php`, JSON.stringify(usuario));
  }
}
