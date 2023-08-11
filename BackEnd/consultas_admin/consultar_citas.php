<?php 

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    include("../conexion.php");
    $conexion = conexion();

/*  $consultar_citas = "SELECT c.id_cita, c.titulo, c.fecha, c.hora, c.comentarios, c.aceptada, e_c.nombre_estatus, c.id_consultorio,
                         con.nombre_consultorio, c.id_paciente, 
                         CONCAT(d_u.nombre, ' ', d_u.apellido_paterno,' ', d_u.apellido_materno) AS nombre_paciente, c.id_doctor, 
                         CONCAT(d_usu.nombre,' ', d_usu.apellido_paterno,' ', d_usu.apellido_materno) AS nombre_doctor
                        FROM citas AS c INNER JOIN estatus_citas AS e_c ON c.id_estatus = e_c.id_estatus 
                        INNER JOIN usuarios AS u ON u.id_usuario = c.id_paciente
                        INNER JOIN datos_usuarios AS d_u ON u.id_usuario = d_u.id_usuario
                        INNER JOIN usuarios AS usu ON usu.id_usuario = c.id_doctor
                        INNER JOIN datos_usuarios AS d_usu ON usu.id_usuario = d_usu.id_usuario
                        INNER JOIN consultorios AS con ON c.id_consultorio = con.id_consultorio 
                        ORDER BY c.id_cita"; */



$consultar_citas = "SELECT c.id_cita, c.titulo, c.fecha, c.hora, c.comentarios, c.aceptada, e_c.nombre_estatus, c.id_paciente,
                    c.dia_preferencia, c.horario_preferente,
                    CONCAT(d_u.nombre, ' ', d_u.apellido_paterno,' ', d_u.apellido_materno) AS nombre_paciente, c.id_doctor, 
                    CONCAT(d_usu.nombre,' ', d_usu.apellido_paterno,' ', d_usu.apellido_materno) AS nombre_doctor
                    FROM citas AS c INNER JOIN estatus_citas AS e_c ON c.id_estatus = e_c.id_estatus 
                    INNER JOIN usuarios AS u ON u.id_usuario = c.id_paciente
                    INNER JOIN datos_usuarios AS d_u ON u.id_usuario = d_u.id_usuario
                    INNER JOIN usuarios AS usu ON usu.id_usuario = c.id_doctor
                    INNER JOIN datos_usuarios AS d_usu ON usu.id_usuario = d_usu.id_usuario
                    ORDER BY c.id_cita";

    $resultado_consultar_citas = mysqli_query($conexion, $consultar_citas);

    if($resultado_consultar_citas){
        $citas = Array();
        $aceptacion = "";
        while($registro = $resultado_consultar_citas->fetch_array()){
            if($registro['aceptada'] == "0"){
                /* $aceptacion = "Pendiente"; */
                $aceptacion = "false";
            }
            if($registro['aceptada'] == "1"){
                /* $aceptacion = 'Aceptada'; */
                $aceptacion = "true";
            }
            $datos = Array(
                "id_cita" => $registro['id_cita'],
                "titulo" => $registro['titulo'],
                "fecha" => $registro['fecha'],
                "hora" => $registro['hora'],
                "comentarios" => $registro['comentarios'],
                "aceptacion" => $aceptacion,
                "estatus" => $registro['nombre_estatus'],
                "dia_preferencia" => $registro['dia_preferencia'],
                "horario_preferente" => $registro['horario_preferente'],
                "paciente" => $registro['id_paciente'],
                "nombre_paciente" => $registro['nombre_paciente'],
                "medico" => $registro['id_doctor'],
                "nombre_medico" => $registro['nombre_doctor']
            );

            $citas[] = $datos;
            $datos = null;
        }

        echo json_encode($citas);
    }
?>