<?php 

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    include("../conexion.php");
    $conexion = conexion();

    $consultar_quejas = "SELECT qs.id_queja_sugerencia, qs.fecha, qs.descripcion, qs.respuesta, qs.atendida, u.id_usuario, d_u.nombre, d_u.apellido_paterno, d_u.apellido_materno 
                        FROM quejas_sugerencias qs 
                        INNER JOIN usuarios u ON qs.id_usuario = u.id_usuario 
                        INNER JOIN datos_usuarios d_u ON u.id_usuario = d_u.id_usuario";
    $resultado_consultar_quejas = mysqli_query($conexion, $consultar_quejas);

    if($resultado_consultar_quejas){
        $quejas = Array();
        $atendida = "";
        while($registro = $resultado_consultar_quejas->fetch_array()){
            if($registro['atendida'] == 0){
                $atendida = "Pendiente";
            }
            if($registro['atendida'] == 1){
                $atendida = "Atendida";
            }
            $nombre = $registro['nombre']." ".$registro['apellido_materno']." ".$registro['apellido_materno'];
            $datos = Array(
                "id_queja" => $registro['id_queja_sugerencia'],
                "fecha" => $registro['fecha'],
                "descripcion" => $registro['descripcion'],
                "respuesta" => $registro['respuesta'],
                "atendida" => $atendida,
                "id_usuario" => $registro['id_usuario'],
                "nombre" => $nombre
            );

            $quejas[] = $datos;
            $datos = null;
        }

        echo json_encode($quejas);
    }

?>