import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Citas } from '../models/citas.model';
import { Usuario } from '../models/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  URL = "http://desaingxalapa.com/dental/appdata_dental/nuevas_consultas/consultas_paciente/";

  citas: Citas[] = [];

  constructor(private http: HttpClient) { 
    this.loadCitas();
  }

  recuperarDatosUsuario(){
    let usuario: Usuario = {
      id_usuario: null,
      usuario: "",
      correo: "",
      pass: "",
      estatus_registro: "",
      estado_actividad: "",
      rol: "",
      nombre: "",
      apellido_materno: "",
      apellido_paterno: "",
      sexo: "",
      edad: null,
      fecha_nacimiento: "",
      curp: "",
      cedula: "",
    }

    usuario = JSON.parse(localStorage.getItem('usuario_login'));

    return usuario;
  }

  /* Inicio */
  cargarDatosPaciente(paciente){
    return this.http.post(`${this.URL}cargar_datos_pacientes.php`, JSON.stringify(paciente));
  }

  cargarDireccionesPaciente(paciente){
    return this.http.post(`${this.URL}cargar_direcciones.php`, JSON.stringify(paciente));
  }

  guardarNuevaDireccion(direccion){
    return this.http.post(`${this.URL}guardar_direccion.php`, JSON.stringify(direccion));
  }

  eliminarDireccion(direccion){
    return this.http.post(`${this.URL}eliminar_direccion.php`, JSON.stringify(direccion));
  }

  actualizarDireccion(direccion){
    return this.http.post(`${this.URL}actualizar_direccion.php`, JSON.stringify(direccion));
  }

  cargarTelefonosPaciente(paciente){
    return this.http.post(`${this.URL}cargar_telefonos.php`, JSON.stringify(paciente));
  }

  guardarTelefono(telefono){
    return this.http.post(`${this.URL}guardar_telefono.php`, JSON.stringify(telefono));
  }

  actualizarDatosPaciente(paciente){
    return this.http.post(`${this.URL}actualizar_datos_paciente.php`, JSON.stringify(paciente));
  }

  /* Citas */
  cargarCitasPaciente(paciente){
    return this.http.post(`${this.URL}consultar_citas.php`, JSON.stringify(paciente));
  }

  generarNuevaCita(cita){
    return this.http.post(`${this.URL}solicitar_cita.php`, JSON.stringify(cita));
  }

  saveCitas(){
    localStorage.setItem('lista_citas', JSON.stringify(this.citas));
  }

  loadCitas(){
    if(localStorage.getItem('lista_citas')){
      this.citas = JSON.parse(localStorage.getItem('lista_citas'));
    } 
    else {
      this.citas = [];
    }
  }

  generateCitas(cita: Citas){
    const nuevaCita = new Citas();
    nuevaCita.titulo = cita.titulo;
    nuevaCita.comentarios = cita.comentarios;
    this.citas.push(nuevaCita);
    this.saveCitas();
    
  }

  /* Recetas */
  cargarRecetasPaciente(paciente){
    return this.http.post(`${this.URL}cargar_recetas.php`, JSON.stringify(paciente));
  }

  cargarMedicamentosRecetas(receta){
    return this.http.post(`${this.URL}cargar_medicamentos_recetas.php`, JSON.stringify(receta));
  }

  cargarRecetaCitaPaciente(cita){
    return this.http.post(`${this.URL}cargar_receta_cita.php`, JSON.stringify(cita));
  }

  cargarMedicamentoRecetaCita(receta){
    return this.http.post(`${this.URL}cargar_medicamentos_receta_cita.php`, JSON.stringify(receta));
  }
}
