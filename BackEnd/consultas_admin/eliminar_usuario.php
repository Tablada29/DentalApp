<?php 
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header('Access-Control-Allow-Origin: *');

    $usuario_json = file_get_contents('php://input');
    $datos_usuario = json_decode($usuario_json);

    include("../conexion.php");
    $conexion = conexion();

    $id_usuario = $datos_usuario->id_usuario;

    $eliminar_usuario = "UPDATE usuarios SET estado_actividad = 0 WHERE id_usuario = '$id_usuario'";

    $resultado = mysqli_query($conexion, $eliminar_usuario);

    if($resultado){
        echo json_encode('OK');
    }
?>