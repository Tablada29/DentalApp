import { Component, OnInit } from '@angular/core';
import { Recetas } from '../../../../models/recetas.model';
import { Citas } from '../../../../models/citas.model';
import { Router } from '@angular/router';
import { MedicoService } from '../../../../services/medico.service';

@Component({
  selector: 'app-nueva-receta-medico',
  templateUrl: './nueva-receta-medico.page.html',
  styleUrls: ['./nueva-receta-medico.page.scss'],
})
export class NuevaRecetaMedicoPage implements OnInit {

  receta: Recetas = {
    id_receta: 0,
    fecha: "",
    id_paciente: 0,
    id_medico: 0,
    medicamentos: [],
    nombre_medico: "",
    nombre_paciente: ""
  }

  cita: Citas = {
    id_cita: null,
    titulo: "",
    fecha: "",
    hora: "",
    comentarios: "",
    aceptacion: "",
    estatus: "",
    dia_preferencia: "",
    horario_preferente: "",
    paciente: null,
    nombre_paciente: "",
    medico: null,
    nombre_medico: ""
  }

  mostrar_guardar = 0;
  
  constructor(private router: Router, private medicoService: MedicoService) { }

  ionViewWillEnter(){
    console.log("Entra al ionViewWillEnter de nueva receta");
    this.datosReceta();
  }

  ngOnInit() {
    this.cita = JSON.parse(localStorage.getItem('cita_seleccionada'))[0];
    const r = JSON.parse(localStorage.getItem('nueva_receta'));
  }

  ngOnDestroy(): void {
    localStorage.removeItem('datos_receta');
    
  }

  guardarReceta(){
    const fecha = new Date();
    const fecha_actual = fecha.getFullYear()+"-"+fecha.getMonth()+"-"+fecha.getDate();
    this.receta.fecha = fecha_actual;
    this.receta.id_paciente = this.cita.paciente;
    this.receta.nombre_paciente = this.cita.nombre_paciente;
    this.receta.id_medico = this.cita.medico;
    this.receta.nombre_medico = this.cita.nombre_medico;
  }

  agregarMedicamento(){
    this.router.navigateByUrl('/agregar-medicamento-medico');
  }

  datosReceta(){
    this.receta = JSON.parse(localStorage.getItem('datos_receta'));
  }

  eliminarReceta(){
    console.log(this.receta);
    this.medicoService.eliminarReceta(this.receta).subscribe(datos => {
      console.log("Datos: ",datos);
      if(datos == 'OK'){
        console.log("Se elimino la receta");
        this.router.navigateByUrl('/detalle-cita-medico');
      }
      else {
        console.log("Problemas al eliminar");
      }
    })
  }

  cancelarReceta(){
    console.log("Medicamentos: ", this.receta.medicamentos);
    localStorage.removeItem('datos_receta');
    if(this.receta.medicamentos.length >= 1){
      console.log("Si hay medicamentos");
      this.router.navigateByUrl('/detalle-cita-medico');
      
    }
    else if(this.receta.medicamentos.length < 1) {
      this.eliminarReceta();
    }
  }
}
