<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    $json_mrc = file_get_contents('php://input');
    $datos_mrc = json_decode($json_mrc);

    include("../conexion.php");
    $conexion = conexion();

    $id_receta = $datos_mrc->id_receta;

    $consulta = "SELECT id_medicamento, medicamento, dosis, recomendaciones
                FROM medicamentos_recetas
                WHERE id_receta = '$id_receta'";
    $resultado_consulta = mysqli_query($conexion, $consulta);

    if($resultado_consulta){
        $medicamentos = Array();
        while($row = $resultado_consulta->fetch_array()){
            $datos = Array(
                "id_medicamento" => $row['id_medicamento'],
                "medicamento" => $row['medicamento'],
                "dosis" => $row['dosis'],
                "recomendaciones" => $row['recomendaciones']
            );

            $medicamentos[] = $datos;
            $datos = null;
        }

        echo json_encode($medicamentos);
    }

?>