<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    include("../conexion.php");
    $conexion = conexion();

    $consultar_pacientes = "SELECT u.id_usuario, CONCAT(d_u.nombre,' ', d_u.apellido_paterno,' ', d_u.apellido_materno) AS nombre_paciente 
                            FROM datos_usuarios AS d_u 
                            INNER JOIN usuarios AS u ON d_u.id_usuario = u.id_usuario
                            INNER JOIN roles AS r ON u.id_rol = r.id_rol
                            WHERE r.descripcion = 'paciente'";

    $resultado_consultar_pacientes = mysqli_query($conexion, $consultar_pacientes);

    if($resultado_consultar_pacientes){
        $pacientes = Array();
        while($registro = $resultado_consultar_pacientes->fetch_array()){
            $datos = Array(
                "id_usuario" => $registro['id_usuario'],
                "nombre" => $registro['nombre_paciente'] 
            );

            $pacientes[] = $datos;
            $datos = null;
        }

        echo json_encode($pacientes);
    }
?>