<?php 

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$json_paciente = file_get_contents('php://input');
$datos_paciente = json_decode($json_paciente);

include("../conexion.php");
$conexion = conexion();

$id_usurio = $datos_paciente->id_usuario;
/* $id_usurio = "2"; */


$consulta = "SELECT c.id_cita, c.titulo, c.fecha, c.hora, c.comentarios, ec.nombre_estatus, d.nombre, d.apellido_paterno, d.apellido_materno 
            FROM citas c 
            INNER JOIN estatus_citas ec ON c.id_estatus = ec.id_estatus
            INNER JOIN usuarios u ON c.id_doctor = u.id_usuario 
            INNER JOIN datos_usuarios d ON u.id_usuario = d.id_usuario 
            WHERE c.id_paciente = '$id_usurio'";

$resultado = mysqli_query($conexion, $consulta);
$datos_completos = Array();
if($resultado){
    while($row = $resultado->fetch_array()){
        $arr = Array(
            "id_cita"=> $row['id_cita'],
            "titulo"=>$row['titulo'],
            "fecha"=>$row['fecha'],
            "hora"=>$row['hora'],
            "comentarios"=>$row['comentarios'],
            "estatus"=>$row['nombre_estatus'],
            "nombre_medico"=>$medico_consulta
        );
        $datos_completos[] = $arr;
        $arr = null;
    }

    echo json_encode($datos_completos);
}

?>