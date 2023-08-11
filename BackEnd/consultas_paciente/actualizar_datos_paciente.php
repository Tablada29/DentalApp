<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    $json_paciente = file_get_contents('php://input');
    $datos_paciente = json_decode($json_paciente);

    include("../conexion.php");
    $conexion = conexion();

    $id_usuario = $datos_paciente->id_usuario;
    $nombre = $datos_paciente->nombre;
    $apellido_paterno = $datos_paciente->apellido_paterno;
    $apellido_materno = $datos_paciente->apellido_materno;
    $sexo = $datos_paciente->sexo;
    $edad = $datos_paciente->edad;
    $fecha_nacimiento = $datos_paciente->fecha_nacimiento;
    $curp = $datos_paciente->curp;

    $actualizar_datos_paciente = "UPDATE datos_usuarios 
                                    SET nombre = '$nombre', apellido_paterno = '$apellido_paterno', apellido_materno = '$apellido_materno',
                                    sexo = '$sexo', edad = '$edad', fecha_nacimiento = '$fecha_nacimiento', curp = '$curp'
                                    WHERE id_usuario = '$id_usuario'";
    
    $resultado_actualizacion = mysqli_query($conexion, $actualizar_datos_paciente);

    if($resultado_actualizacion){
        echo json_encode('OK');
    }
?>