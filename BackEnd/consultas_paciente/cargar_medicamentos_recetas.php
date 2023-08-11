<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    $json_receta = file_get_contents('php://input');
    $datos_receta = json_decode($json_receta);

    include("../conexion.php");
    $conexion = conexion();

    $id_receta = $datos_receta->id_receta;

    $consultar_medicamentos = "SELECT id_medicamento, medicamento, dosis, recomendaciones 
                            FROM medicamentos_recetas WHERE id_receta = '$id_receta'";
    
    $resultado_consultar_medicamentos = mysqli_query($conexion, $consultar_medicamentos);

    $medicamentos = Array();

    if($resultado_consultar_medicamentos){
        while($registro = $resultado_consultar_medicamentos->fetch_array()){
            $datos = Array(
                "id_medicamento" => $registro['id_medicamento'],
                "medicamento" => $registro['medicamento'],
                "dosis" => $registro['dosis'],
                "recomendaciones" => $registro['recomendaciones']
            );

            $medicamentos[] = $datos;
            $datos = null;
        }

        echo json_encode($medicamentos);
    }
?>