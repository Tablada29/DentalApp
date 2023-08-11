<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    $medico_json = file_get_contents('php://input');
    $datos_medico = json_decode($medico_json);

    include("../conexion.php");
    $conexion = conexion();

    $id_usuario = $datos_medico->id_usuario;

    $consultar_citas = "SELECT c.id_cita, c.titulo, c.fecha, c.hora, c.comentarios, c.aceptada, e_c.nombre_estatus, c.id_paciente, 
                        CONCAT(d_u.nombre, ' ', d_u.apellido_paterno,' ', d_u.apellido_materno) AS nombre_paciente, c.id_doctor, 
                        CONCAT(d_usu.nombre,' ', d_usu.apellido_paterno,' ', d_usu.apellido_materno) AS nombre_doctor
                        FROM citas AS c INNER JOIN estatus_citas AS e_c ON c.id_estatus = e_c.id_estatus 
                        INNER JOIN usuarios AS u ON u.id_usuario = c.id_paciente
                        INNER JOIN datos_usuarios AS d_u ON u.id_usuario = d_u.id_usuario
                        INNER JOIN usuarios AS usu ON usu.id_usuario = c.id_doctor
                        INNER JOIN datos_usuarios AS d_usu ON usu.id_usuario = d_usu.id_usuario
                        WHERE c.id_doctor = '$id_usuario' AND c.aceptada = '1'";
    
    $resultado_consultar_citas = mysqli_query($conexion, $consultar_citas);

    if($resultado_consultar_citas){
        $citas = Array();
        $aceptacion = "";
        while($row = $resultado_consultar_citas->fetch_array()){
            
            if($row['aceptada'] == "0"){
                $aceptacion = "false";
            }
            if($row['aceptada'] == "1"){
                $aceptacion = "true";
            }
            $datos = Array(
                "id_cita" => $row['id_cita'],
                "titulo" => $row['titulo'],
                "fecha" => $row['fecha'],
                "hora" => $row['hora'],
                "comentarios" => $row['comentarios'],
                "aceptacion" => $aceptacion,
                "estatus" => $row['nombre_estatus'],
                "paciente" => $row['id_paciente'],
                "nombre_paciente" => $row['nombre_paciente'],
                "medico" => $row['id_doctor'],
                "nombre_medico" => $row['nombre_doctor']
            );

            $citas[] = $datos;
            $datos = null;
        }

        echo json_encode($citas);
    }
?>