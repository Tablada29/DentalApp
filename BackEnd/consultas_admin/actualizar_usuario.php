<?php 
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header('Access-Control-Allow-Origin: *');

    $usuario_json = file_get_contents('php://input');
    $datos_usuario = json_decode($usuario_json);

    include("../conexion.php");
    $conexion = conexion();

    $id_usuario = $datos_usuario->id_usuario;
    $nombre = $datos_usuario->nombre;
    $apellido_paterno = $datos_usuario->apellido_paterno;
    $apellido_materno = $datos_usuario->apellido_materno;
    $correo = $datos_usuario->correo;
    $sexo = $datos_usuario->sexo;
    $edad = $datos_usuario->edad;
    $fecha_nacimiento = $datos_usuario->fecha_nacimiento;
    $curp = $datos_usuario->curp;
    $cedula = $datos_usuario->cedula;

    $actualizar_usuario = "UPDATE datos_usuarios SET nombre = '$nombre', apellido_paterno = '$apellido_paterno', apellido_materno = '$apellido_materno',
                            sexo = '$sexo', edad = '$edad', fecha_nacimiento = '$fecha_nacimiento', curp = '$curp', cedula = '$cedula'
                            WHERE id_usuario = '$id_usuario'";
    $resultado_actualizar = mysqli_query($conexion, $actualizar_usuario);

    if($resultado_actualizar){
        $actualizar_datos = "UPDATE usuarios SET correo = '$correo' WHERE id_usuario = '$id_usuario'";
        $resultado_update = mysqli_query($conexion, $actualizar_datos);
        if($resultado_update){
            echo json_encode('OK');
        }
    }
?>