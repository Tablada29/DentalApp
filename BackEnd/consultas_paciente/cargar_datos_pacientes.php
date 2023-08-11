<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    $json_paciente = file_get_contents('php://input');
    $datos_paciente = json_decode($json_paciente);

    include("../conexion.php");
    $conexion = conexion();

    $id_usuario = $datos_paciente->id_usuario;
    /* $id_usuario = 3; */

    $consulta = "SELECT u.id_usuario, u.usuario, u.correo, u.estatus_registro, u.estado_actividad, r.descripcion,
                da_u.nombre, da_u.apellido_paterno, da_u.apellido_materno, da_u.sexo, da_u.edad, da_u.fecha_nacimiento, da_u.curp
                FROM datos_usuarios da_u INNER JOIN usuarios u ON u.id_usuario = da_u.id_usuario INNER JOIN roles r ON r.id_rol = u.id_rol  WHERE u.id_usuario = '$id_usuario'";
    $respuesta = mysqli_query($conexion, $consulta);

    $datos_usuario = Array();

    if($respuesta){
        while($row = $respuesta->fetch_array()){
            $datos = Array(
                "id_usuario" => $row['id_usuario'],
                "usuario" => $row['usuario'],
                "correo" => $row['correo'],
                "estatus_registro" => $row['estatus_registro'],
                "estado_actividad" => $row['estado_actividad'],
                "rol" => $row['descripcion'],
                "nombre"=>$row['nombre'],
                "apellido_paterno" => $row['apellido_paterno'],
                "apellido_materno" => $row['apellido_materno'],
                "sexo"=>$row['sexo'],
                "edad"=>$row['edad'],
                "fecha_nacimiento"=>$row['fecha_nacimiento'],
                "curp" => $row['curp']
            );
            $datos_usuario[] = $datos;
            $datos = null;
        }
        echo json_encode($datos_usuario);  
    }
?>