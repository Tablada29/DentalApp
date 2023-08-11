import { Component, OnInit } from '@angular/core';
import { Citas } from '../../../../models/citas.model';
import { Router } from '@angular/router';
import { Recetas } from '../../../../models/recetas.model';
import { MedicoService } from '../../../../services/medico.service';

@Component({
  selector: 'app-detalle-cita-medico',
  templateUrl: './detalle-cita-medico.page.html',
  styleUrls: ['./detalle-cita-medico.page.scss'],
})
export class DetalleCitaMedicoPage implements OnInit {

  cita: Citas;
  
  receta: Recetas = {
    id_receta: null,
    fecha: "",
    id_paciente: null,
    id_medico: null,
    medicamentos: [],
    nombre_paciente: "",
    nombre_medico: "",
  };

  constructor(private router: Router, private medicoService: MedicoService) { }

  ionViewWillEnter(){
    console.log("Entra al ionViewWillEnter de detalle cita");
    this.cargarReceta();
  }

  ngOnInit() {
    this.cita = JSON.parse(localStorage.getItem('cita_seleccionada'));
  }

  ngOnDestroy(): void {
    localStorage.removeItem('cita_seleccionada');
  }
  generarReceta(){
    const fecha = new Date();
    this.receta.fecha = fecha.getFullYear()+"-"+(fecha.getMonth()+1)+"-"+fecha.getDate();
    this.receta.id_paciente = this.cita.paciente;
    this.receta.id_medico = this.cita.medico;
    this.receta.nombre_paciente = this.cita.nombre_paciente;
    this.receta.nombre_medico = this.cita.nombre_medico;
    this.receta.id_cita = this.cita.id_cita;
    
    console.log(this.receta);
    this.medicoService.guardarReceta(this.receta).subscribe(datos => {
      console.log(datos);
      this.receta.id_receta = parseInt(datos.toString());
      localStorage.setItem('datos_receta', JSON.stringify(this.receta));
      this.router.navigateByUrl('/nueva-receta-medico')
    })
  }

  cargarReceta(){
    this.medicoService.cargarRecetas(this.cita).subscribe((datos: Recetas[]) => {
      if(datos.length >= 1){
        console.log("Hay datos");
        this.receta = datos[0];
        console.log(this.receta);
        localStorage.setItem('datos_receta', JSON.stringify(this.receta));
        console.log("Receta cargada: ",this.receta);
      }
      else if(datos.length <= 0){
        console.log("No hay datos");
        console.log(this.receta);
      }
    })
  }

  mostrarReceta(){
    this.router.navigateByUrl('/detalle-receta-medico');
  }
}
