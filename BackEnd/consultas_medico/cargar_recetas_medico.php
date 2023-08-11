<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    $cita_json = file_get_contents('php://input');
    $datos_cita = json_decode($cita_json);

    include("../conexion.php");
    $conexion = conexion();

    $id_cita = $datos_cita->id_cita;

    $consulta_receta = "SELECT r.id_receta, r.fecha, r.id_paciente, r.id_doctor, 
                        CONCAT(d_u.nombre, ' ', d_u.apellido_paterno, ' ', d_u.apellido_materno) AS nombre_paciente,
                        CONCAT(du.nombre, ' ', du.apellido_paterno, ' ', du.apellido_materno) AS nombre_dentista,
                        r.id_cita 
                        FROM recetas AS r
                        INNER JOIN datos_usuarios AS d_u ON r.id_paciente = d_u.id_usuario
                        INNER JOIN datos_usuarios AS du ON r.id_doctor = du.id_usuario
                        WHERE id_cita = '$id_cita'";
    $resultado_consulta = mysqli_query($conexion, $consulta_receta);

    if($resultado_consulta){
        $receta = Array();
        while($row = $resultado_consulta->fetch_array()){
            $datos = Array(
                "id_receta" => $row['id_receta'],
                "fecha" => $row['fecha'],
                "id_paciente" => $row['id_paciente'],
                "id_medico" => $row['id_doctor'],
                "id_cita" => $row['id_cita'],
                "nombre_paciente" => $row['nombre_paciente'],
                "nombre_medico" => $row['nombre_dentista']
            );
            $receta[] = $datos;
            $datos = null;
        }

        echo json_encode($receta);
    }
?>