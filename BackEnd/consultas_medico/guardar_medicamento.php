<?php 
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header('Access-Control-Allow-Origin: *');

    $medicamento_json = file_get_contents('php://input');
    $datos_medicamento = json_decode($medicamento_json);

    include("../conexion.php");
    $conexion = conexion();

    $medicamento = $datos_medicamento->medicamento;
    $dosis = $datos_medicamento->dosis;
    $recomendaciones = $datos_medicamento->recomendaciones;
    $id_receta = $datos_medicamento->id_receta;

    $guardar = "INSERT INTO medicamentos_recetas (medicamento, dosis, recomendaciones, id_receta)
                VALUES ('$medicamento', '$dosis', '$recomendaciones', '$id_receta')";
    
    $resultado_guardar = mysqli_query($conexion, $guardar);

    if($resultado_guardar){
        $ultimo_medicamento = "SELECT id_medicamento FROM medicamentos_recetas ORDER BY id_medicamento DESC LIMIT 1";
        $resultado = mysqli_query($conexion, $ultimo_medicamento);
        $id_medicamento = "";
        if($resultado){
            while($row = $resultado->fetch_array()){
                $id_medicamento = $row['id_medicamento'];
            }

            echo json_encode($id_medicamento);
        }
    }
?>