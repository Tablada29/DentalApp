<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    $json_paciente = file_get_contents('php://input');
    $datos_paciente = json_decode($json_paciente);

    include("../conexion.php");
    $conexion = conexion();

    $id_usuario = $datos_paciente->id_usuario;

    $consultar_recetas = "SELECT r.id_receta, r.fecha, du.nombre, du.apellido_paterno, du.apellido_materno 
                        FROM recetas r INNER JOIN usuarios u ON r.id_doctor = u.id_usuario 
                        INNER JOIN datos_usuarios du ON du.id_usuario = u.id_usuario 
                        WHERE r.id_paciente = '$id_usuario'";
    $resultado_consultar_recetas = mysqli_query($conexion, $consultar_recetas);
    $recetas = Array();
    if($resultado_consultar_recetas){
        while($registro = $resultado_consultar_recetas->fetch_array()){
            $nombre_completo = $registro['nombre']." ".$registro['apellido_paterno']." ".$registro['apellido_materno'];
            $datos = Array(
                "id_receta" => $registro['id_receta'],
                "fecha" => $registro['fecha'],
                "nombre_completo" => $nombre_completo
            );

            $recetas[] = $datos;
            $datos = null;
        }
        echo json_encode($recetas);
    }
?>