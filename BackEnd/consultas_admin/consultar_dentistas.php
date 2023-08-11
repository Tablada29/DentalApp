<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    include("../conexion.php");
    $conexion = conexion();

    $consultar_dentistas = "SELECT u.id_usuario, CONCAT(d_u.nombre,' ', d_u.apellido_paterno,' ', d_u.apellido_materno) AS nombre_medico 
                            FROM datos_usuarios AS d_u 
                            INNER JOIN usuarios AS u ON d_u.id_usuario = u.id_usuario
                            INNER JOIN roles AS r ON u.id_rol = r.id_rol
                            WHERE r.descripcion = 'dentista'";
    $resultado_consultar_dentistas = mysqli_query($conexion, $consultar_dentistas);

    if($resultado_consultar_dentistas){
        $dentistas = Array();
        while($registro = $resultado_consultar_dentistas->fetch_array()){
            $datos = Array(
                "id_usuario" => $registro['id_usuario'],
                "nombre" => $registro['nombre_medico']
            );

            $dentistas[] = $datos;
            $datos = null;
        }

        echo json_encode($dentistas);
    }
?>