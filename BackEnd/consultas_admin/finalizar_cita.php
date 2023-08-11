<?php 
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header('Access-Control-Allow-Origin: *');

    $cita_json = file_get_contents('php://input');
    $datos_cita = json_decode($cita_json);

    include("../conexion.php");
    $conexion = conexion();

    $id_cita = $datos_cita->id_cita;

    $finalizar_cita = "UPDATE citas SET id_estatus = 3 WHERE id_cita = '$id_cita'";

    $resultado_finalizar = mysqli_query($conexion, $finalizar_cita);

    if($resultado_finalizar){
        echo json_encode('OK');
    }
?>