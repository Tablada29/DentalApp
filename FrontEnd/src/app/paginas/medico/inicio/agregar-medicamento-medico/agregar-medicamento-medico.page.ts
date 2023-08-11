import { Component, OnInit } from '@angular/core';
import { Medicamentos } from '../../../../models/medicamentos.model';
import { Recetas } from '../../../../models/recetas.model';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { MedicoService } from '../../../../services/medico.service';

@Component({
  selector: 'app-agregar-medicamento-medico',
  templateUrl: './agregar-medicamento-medico.page.html',
  styleUrls: ['./agregar-medicamento-medico.page.scss'],
})
export class AgregarMedicamentoMedicoPage implements OnInit {

  lista_medicamentos: Medicamentos[] = [];
  
  medicamento: Medicamentos = {
    id_medicamento: 0,
    medicamento: "",
    dosis: "",
    recomendaciones: "",
    id_receta: 0
  }

  receta: Recetas = {
    id_receta: 0,
    fecha: "",
    id_paciente: 0,
    id_medico: 0,
    medicamentos: [],
    nombre_paciente: "",
    nombre_medico: "",
  }

  constructor(private router: Router, private toast: ToastController, private medicoService: MedicoService) { }

  ngOnInit() {
    this.cargarDatosReceta();
  }

  cargarDatosReceta(){
    this.receta = JSON.parse(localStorage.getItem('datos_receta'));
  }

  agregarMedicamento(){
    this.medicamento.id_receta = this.receta.id_receta;

    this.medicoService.guardarMedicamento(this.medicamento).subscribe(datos => {
      console.log(datos);
      this.medicamento.id_medicamento = parseInt(datos.toString());
      this.receta.medicamentos.push(new Medicamentos(this.medicamento.id_medicamento, this.medicamento.medicamento, this.medicamento.dosis, this.medicamento.recomendaciones, this.medicamento.id_receta));
      localStorage.setItem('datos_receta', JSON.stringify(this.receta));
      this.medicamentoGuardado();
      this.vaciarCampos();
      this.router.navigateByUrl('/nueva-receta-medico');
    })
  }

  async medicamentoGuardado(){
    const mensaje = await this.toast.create({
      message: `${this.medicamento.medicamento} agregado a la receta`,
      duration: 3000,
      color: 'secundario'
    });
    await mensaje.present()
  }

  vaciarCampos(){
    this.medicamento.medicamento = "";
    this.medicamento.dosis = "";
    this.medicamento.recomendaciones = "";
  }
}
