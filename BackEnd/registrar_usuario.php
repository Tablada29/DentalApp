<?php 
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header('Access-Control-Allow-Origin: *');

    $registro_json = file_get_contents('php://input');
    $datos_registro = json_decode($registro_json);

    include("conexion.php");
    include("correo_confirmacion.php");
    $conexion = conexion();

    $nombre = $datos_registro->nombre;
    $apellido_paterno = $datos_registro->apellido_paterno;
    $apellido_materno = $datos_registro->apellido_materno;
    $usuario = $datos_registro->usuario;
    $pass = password_hash($datos_registro->pass, PASSWORD_DEFAULT);
    $correo = $datos_registro->correo;
    $id_rol = $datos_registro->rol;

    $sql_usuario = "INSERT INTO usuarios (usuario, pass, correo, id_rol)
                    VALUES ('$usuario', '$pass', '$correo', '$id_rol')";
    
    $resultado_usuario = mysqli_query($conexion, $sql_usuario);

    if($resultado_usuario){

        $sql_ultimo_usuario = "SELECT id_usuario FROM usuarios ORDER BY id_usuario desc LIMIT 1";
        $resultado_ultimo_usuario = mysqli_query($conexion,$sql_ultimo_usuario);
        $id_usuario = "";
        while($row = $resultado_ultimo_usuario->fetch_array()){
            $id_usuario = $row['id_usuario'];
        }

        $sql_datos_usuarios = "INSERT INTO datos_usuarios (nombre, apellido_paterno, apellido_materno, id_usuario)
                            VALUES ('$nombre', '$apellido_paterno', '$apellido_materno', '$id_usuario')";
                            
        $resultado_datos_usuarios = mysqli_query($conexion, $sql_datos_usuarios);

        if($resultado_datos_usuarios){
            /* $nombre_usuario = $nombre." ".$apellido_paterno." ".$apellido_materno;
            enviar_correo_confirmacion($correo, $nombre_usuario, $usuario); */
            echo json_encode('OK');
        }
        else{
            echo json_encode('Error datos usuarios');
        }
    }
    else{
        echo json_encode('Error usuarios');
    }

?>