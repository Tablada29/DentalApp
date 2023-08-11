<?php 
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header('Access-Control-Allow-Origin: *');

    $receta_json = file_get_contents('php://input');
    $datos_receta = json_decode($receta_json);

    include("../conexion.php");
    $conexion = conexion();

    $id_receta = $datos_receta->id_receta;

    $eliminar_receta = "DELETE FROM recetas WHERE id_receta = '$id_receta'";

    $resultado_eliminar = mysqli_query($conexion, $eliminar_receta);

    if($resultado_eliminar){
        echo json_encode('OK');
    }
?>