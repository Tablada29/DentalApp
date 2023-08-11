<?php 
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header('Access-Control-Allow-Origin: *');

    $nueva_cita_json = file_get_contents('php://input');
    $datos_cita = json_decode($nueva_cita_json);

    include("../conexion.php");
    $conexion = conexion();

    $titulo = $datos_cita->titulo;
    $fecha = $datos_cita->fecha;
    $hora = $datos_cita->hora;
    $comentarios = $datos_cita->comentarios;
    $aceptada = $datos_cita->aceptacion;
    $id_estatus = $datos_cita->estatus;
    $id_paciente = $datos_cita->paciente;
    $id_medico = $datos_cita->medico;

    $insertar_cita = "INSERT INTO citas (titulo, fecha, hora, comentarios, aceptada, id_estatus, id_paciente, id_doctor)
                        VALUES ('$titulo', '$fecha', '$hora', '$comentarios', '$aceptada', '$id_estatus', '$id_paciente', '$id_medico')";
    $resultado_insertar_cita = mysqli_query($conexion, $insertar_cita);

    if($resultado_insertar_cita){
        echo json_encode('OK');
    }
?>