<?php 
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header('Access-Control-Allow-Origin: *');

    $receta_json = file_get_contents('php://input');
    $datos_receta = json_decode($receta_json);

    include("../conexion.php");
    $conexion = conexion();

    $fecha = $datos_receta->fecha;
    $id_paciente = $datos_receta->id_paciente;
    $id_medico = $datos_receta->id_medico;
    $id_cita = $datos_receta->id_cita;

    $guardar_receta = "INSERT INTO recetas (fecha, id_paciente, id_doctor, id_cita)
                        VALUES ('$fecha', '$id_paciente', '$id_medico', '$id_cita')";
    $resultado_guardar = mysqli_query($conexion, $guardar_receta);
    if($resultado_guardar){
        $ultima_receta = "SELECT id_receta FROM recetas ORDER BY id_receta DESC LIMIT 1";
        $resultado_ultima_receta = mysqli_query($conexion, $ultima_receta);
        $id_receta = "";
        if($resultado_ultima_receta){
            while($row = $resultado_ultima_receta->fetch_array()){
                $id_receta = $row['id_receta'];
            }
        }
        echo json_encode($id_receta);
    }
?>