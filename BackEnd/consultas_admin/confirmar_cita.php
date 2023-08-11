<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    $json_cita = file_get_contents('php://input');
    $datos_cita = json_decode($json_cita);

    include("../conexion.php");
    $conexion = conexion();

    $id_cita = $datos_cita->id_cita;
    $titulo = $datos_cita->titulo;
    $fecha = $datos_cita->fecha;
    $hora = $datos_cita->hora;
    $comentarios = $datos_cita->comentarios;
    $aceptada = $datos_cita->aceptacion;
    $id_estatus = $datos_cita->estatus;
/*     $id_consultorio = $datos_cita->consultorio; */
    $id_paciente = $datos_cita->paciente;
    $id_medico = $datos_cita->medico;

    $actualizar = "UPDATE citas SET titulo = '$titulo', fecha = '$fecha', hora = '$hora', comentarios = '$comentarios', aceptada = '$aceptada', id_estatus = '$id_estatus',
                    id_paciente = '$id_paciente', id_doctor = '$id_medico'
                    WHERE id_cita = '$id_cita'";
                    
    $resultado_actualizar = mysqli_query($conexion, $actualizar);

    if($resultado_actualizar){
        echo json_encode('OK');
    }
?>