<?php 
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header('Access-Control-Allow-Origin: *');

    $usuario_json = file_get_contents('php://input');
    $datos_usuario = json_decode($usuario_json);

    include("../conexion.php");
    $conexion = conexion();

    $nombre = $datos_usuario->nombre;
    $apellido_p = $datos_usuario->apellido_p;
    $apellido_m = $datos_usuario->apellido_m;
    $usuario = $datos_usuario->usuario;
    $pass = password_hash($datos_usuario->pass, PASSWORD_DEFAULT);
    $correo = $datos_usuario->correo;
    $estatus_registro = 1;
    $estado_actividad = 1;
    $id_rol = 3;

    $agregar_usuario = "INSERT INTO usuarios (usuario, pass, correo, estatus_registro, estado_actividad, id_rol)
                        VALUES ('$usuario', '$pass', '$correo', '$estatus_registro', '$estado_actividad', '$id_rol')";

    $resultado_agregar = mysqli_query($conexion, $agregar_usuario);

    if($resultado_agregar){
        $ultimo_usuario = "SELECT id_usuario FROM usuarios ORDER BY id_usuario desc LIMIT 1";
        $resultado_ultimo_usuario = mysqli_query($conexion, $ultimo_usuario);

        $id_ultimo_usuario = "";

        if($resultado_ultimo_usuario){
            while($registro = $resultado_ultimo_usuario->fetch_array()){
                $id_ultimo_usuario = $registro['id_usuario'];
            }

            $guardar_datos_usuario = "INSERT INTO datos_usuarios (nombre, apellido_paterno, apellido_materno, id_usuario)
                                        VALUES ('$nombre', '$apellido_p', '$apellido_m', '$id_ultimo_usuario')";
            $resultado_guardar_datos = mysqli_query($conexion, $guardar_datos_usuario);

            if($resultado_guardar_datos){
                echo json_encode('OK');
            }
            else{
                echo "Error al guardar los datos del usuario";
            }
        }
        else{
            echo "Error al consultar el ultimo usuario";
        }
    }
    else {
        echo "Error al guardar usuario";
    }
?>