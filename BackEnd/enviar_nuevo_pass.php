<?php 
    function enviar_nuevo_pass($correo_destino, $nuevo_pass, $nombre_usuario){
        ini_set( 'display_errors', 1 );
        error_reporting( E_ALL );
        $remitente = "pruebas.desaing@gmail.com";
        $destinatario = $correo_destino;
        $asunto = "Cambio de contraseña";
        $mensaje = 'Hola '.$nombre_usuario."\r\n"."Aquí esta la nueva contraseña que has solicitado"."\r\n"
                    ."Tu nueva contraseña es: ".$nuevo_pass."\r\n"
                    ."Como sugerencia, despues de iniciar sesión recuerda cambiar tu contraseña"
                    ." por una que recuerdes con facilidad.";
        $cabecera = "Remitente: ".$remitente;
        mail($destinatario, $asunto, $mensaje, $cabecera);
        return "Mensaje enviado";

    }
?>