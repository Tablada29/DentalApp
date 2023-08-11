<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    
    include("../conexion.php");
    $conexion = conexion();

    $consultar_usuarios = "SELECT 
                        u.id_usuario, u.usuario, u.correo, u.estatus_registro, u.estado_actividad, 
                        d_u.nombre, d_u.apellido_paterno, d_u.apellido_materno, d_u.sexo, d_u.edad, 
                        d_u.fecha_nacimiento, d_u.curp, d_u.cedula, r.descripcion 
                        FROM datos_usuarios d_u 
                        INNER JOIN usuarios u ON d_u.id_usuario = u.id_usuario 
                        INNER JOIN roles r ON u.id_rol = r.id_rol";
    
    $resultado_consultar_usuarios = mysqli_query($conexion, $consultar_usuarios);

    if($resultado_consultar_usuarios){
        $usuarios = Array();
        while($registro = $resultado_consultar_usuarios->fetch_array()){
            $datos = Array(
                "id_usuario" => $registro['id_usuario'],
                "usuario" => $registro['usuario'],
                "correo" => $registro['correo'],
                "estatus_registro" => $registro['estatus_registro'],
                "estado_actividad" => $registro['estado_actividad'],
                "nombre" => $registro['nombre'],
                "apellido_paterno" => $registro['apellido_paterno'],
                "apellido_materno" => $registro['apellido_materno'],
                "sexo" => $registro['sexo'],
                "edad" => $registro['edad'],
                "fecha_nacimiento" => $registro['fecha_nacimiento'],
                "curp" => $registro['curp'],
                "cedula" => $registro['cedula'],
                "rol" => $registro['descripcion']
            );

            $usuarios[] = $datos;
            $datos = null;
        }
        echo json_encode($usuarios);
    }
?>