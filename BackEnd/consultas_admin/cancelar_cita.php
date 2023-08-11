<?php
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header('Access-Control-Allow-Origin: *');

    $nueva_cita_json = file_get_contents('php://input');
    $datos_cita = json_decode($nueva_cita_json);

    include("../conexion.php");
    $conexion = conexion();

    $id_cita = $datos_cita->id_cita;

    $cancelar_cita = "UPDATE citas SET id_estatus = 2 WHERE id_cita = '$id_cita'";

    $resultado = mysqli_query($conexion, $cancelar_cita);

    if($resultado){
        echo json_encode('OK');
    }
?>