import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class LoginRegisterService {

    URL = "http://desaingxalapa.com/dental/appdata_dental/nuevas_consultas/";

    constructor(private http: HttpClient){

    }
    
    obtenerUsuarios(login){
        return this.http.post(`${this.URL}login.php`, JSON.stringify(login));
    }

    registrarUsuarios(registro){
        return this.http.post(`${this.URL}registrar_usuario.php`, JSON.stringify(registro));
    }

    login(datos){
        let nombre_completo = `${datos[0].nombre} ${datos[0].apellido_paterno} ${datos[0].apellido_materno}`;
        localStorage.setItem("id_usuario",datos[0].id_usuario);
        localStorage.setItem("nombre_usuario", nombre_completo);
        return nombre_completo;
    }

    reenviarConfirmacion(datos){
        return this.http.post(`${this.URL}reenviar_confirmacion_correo.php`, JSON.stringify(datos[0]));
    }

    verificarUsuarioDisponible(registro){
        return this.http.post(`${this.URL}verificar_usuario_disponible.php`, JSON.stringify(registro));
    }

    verificarCorreoDisponible(registro){
        return this.http.post(`${this.URL}verificar_correo_disponible.php`, JSON.stringify(registro));
    }

    recuperarPass(correo){
        return this.http.post(`${this.URL}recuperar_pass.php`, JSON.stringify(correo));
    }
}