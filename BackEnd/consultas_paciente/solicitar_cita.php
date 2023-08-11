<?php 
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header('Access-Control-Allow-Origin: *');

    $nueva_cita_json = file_get_contents('php://input');
    $datos_cita = json_decode($nueva_cita_json);

    include("../conexion.php");
    $conexion = conexion();

    $titulo_cita = $datos_cita->titulo;
    $comentarios_cita = $datos_cita->comentarios;
    $dia_preferencia = $datos_cita->dia_preferencia;
    $horario_preferente = $datos_cita->horario_preferente;
    $id_usuario = $datos_cita->paciente;

    $sentencia = "INSERT INTO citas (titulo, comentarios, id_paciente, dia_preferencia, horario_preferente)
                VALUES ('$titulo_cita', '$comentarios_cita', '$id_usuario', '$dia_preferencia', '$horario_preferente')";

    $resultado = mysqli_query($conexion, $sentencia);

    if($resultado){
        echo json_encode('OK');
    }
?>