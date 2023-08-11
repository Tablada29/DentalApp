<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    $json_paciente = file_get_contents('php://input');
    $datos_paciente = json_decode($json_paciente);

    include("../conexion.php");
    $conexion = conexion();

    $id_usuario = $datos_paciente->id_usuario;
    $consulta_telefonos = "SELECT t.id_telefono, t.telefono, t.referencia 
                            FROM telefonos t 
                            INNER JOIN telefonos_usuarios t_u ON t.id_telefono = t_u.id_telefono 
                            INNER JOIN usuarios u ON u.id_usuario = t_u.id_usuario 
                            WHERE u.id_usuario = '$id_usuario'";

    $resultado_telefonos = mysqli_query($conexion, $consulta_telefonos);

    $telefonos = Array();

    if($resultado_telefonos){
        while($registro = $resultado_telefonos->fetch_array()){
            $datos = Array(
                "id_telefono" => $registro['id_telefono'],
                "telefono" => $registro['telefono'],
                "referencia" => $registro['referencia']
            );

            $telefonos[] = $datos;
            $datos = null;
        }

        echo json_encode($telefonos);
    }
?>