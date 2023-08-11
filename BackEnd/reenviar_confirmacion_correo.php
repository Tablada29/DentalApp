<?php 
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header('Access-Control-Allow-Origin: *');
    $registro_json = file_get_contents('php://input');
    $datos_registro = json_decode($registro_json);
    include("conexion.php");
    include("correo_confirmacion.php");

    $coneccion = conexion();

    $nombre = $datos_registro->nombre;
    $apellido_paterno = $datos_registro->apellido_paterno;
    $apellido_materno = $datos_registro->apellido_materno;
    $usuario = $datos_registro->usuario;
    $correo = $datos_registro->correo;
    $nombre_usuario = $nombre." ".$apellido_paterno." ".$apellido_materno;
    $enviado = enviar_correo_confirmacion($correo, $nombre_usuario, $usuario);
    if($enviado == "Mensaje enviado"){
        echo json_encode('OK');
    }else{
        echo json_encode("Error");
    }
    
?>