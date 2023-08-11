<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    $json_direccion = file_get_contents('php://input');
    $datos_direccion = json_decode($json_direccion);

    include("../conexion.php");
    $conexion = conexion();

    $id_direccion = $datos_direccion->id_direccion;

    $eliminacion = "DELETE FROM direcciones_usuarios WHERE id_direccion = '$id_direccion'";
    $resultado_eliminacion = mysqli_query($conexion, $eliminacion);

    if($resultado_eliminacion){
        
        $eliminacion_direccion = "DELETE FROM direcciones WHERE id_direccion = '$id_direccion'";
        $resultado_eliminacion_direccion = mysqli_query($conexion, $eliminacion_direccion);

        if($resultado_eliminacion_direccion){
            echo json_encode('OK');
        }
    }
?>