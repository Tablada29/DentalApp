<?php 

    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header('Access-Control-Allow-Origin: *');

    function generar_string_aleatorio() { 
        $length = 10;
        return substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, $length); 
    } 

    include("conexion.php");
    include("enviar_nuevo_pass.php");
    $conexion = conexion();

    $recuperar_pass_json = file_get_contents('php://input');
    $datos_recuperacion = json_decode($recuperar_pass_json);

    $correo_usuario = $datos_recuperacion->correo;

    $consulta = "SELECT c.id_usuario, c.usuario, c.pass, c.id_rol, c.estatus_registro, c.correo, d.nombre, d.apellido_paterno, d.apellido_materno 
                FROM usuarios c INNER JOIN datos_usuarios d ON c.id_usuario = d.id_usuario 
                WHERE c.correo = '$correo_usuario'";
    
    $resultado = mysqli_query($conexion, $consulta);
    $usuarioConsultado = mysqli_fetch_assoc($resultado);

    $id_usuario = "";
    $nombre_usuario = "";
    $nueva_pass = generar_string_aleatorio();
    $nueva_pass_encriptada = password_hash($nueva_pass, PASSWORD_DEFAULT);

    if($usuarioConsultado){
        $id_usuario = $usuarioConsultado['id_usuario'];
        $nombre_usuario = $usuarioConsultado['nombre']." ".$usuarioConsultado['apellido_paterno']." ".$usuarioConsultado['apellido_materno'];

        $cambiar_pass = "UPDATE usuarios SET pass = '$nueva_pass_encriptada' WHERE id_usuario = '$id_usuario'";
        $resultado_cambio = mysqli_query($conexion, $cambiar_pass);

        if($resultado_cambio == true){
            enviar_nuevo_pass($correo_usuario, $nueva_pass, $nombre_usuario);
            echo json_encode('OK');
        }
        else{
            echo json_encode('Error datos usuarios');
        }
    }
    else{
        echo json_encode('ERROR');
    }
?>