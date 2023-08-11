<?php 
    function enviar_correo_confirmacion($correo_destino, $nombre_usuario, $usuario){
    
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = "pruebas.desaing@gmail.com";
    $to = $correo_destino;
    $subject = "Confirmación de correo";
    $message = 'Hola '.$nombre_usuario."\r\n"." Sigue este vinculo para activar tu cuenta"."\r\n\r\n".
    " http://desaingxalapa.com/dental/appdata_dental/nuevas_consultas/confirmar_correo.php?usuario=".$usuario."\r\n".
    "Si no funciona copia y pega en tu navegador";
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);
    return "Mensaje enviado";
    }
?>