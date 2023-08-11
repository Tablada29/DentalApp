<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    $registro_json = file_get_contents('php://input');
    $datos_registro = json_decode($registro_json);
    include("conexion.php");
    $coneccion = conexion();

    $correo = $datos_registro->correo;

    $consulta = "SELECT id_usuario, usuario, correo, pass, estatus_registro, id_rol 
                 FROM usuarios 
                 WHERE correo = '$correo'";
    $resultado = mysqli_query($coneccion, $consulta);
    $correoConsultado = mysqli_fetch_assoc($resultado);

    if(empty($correoConsultado['usuario'])){
        $arr = array();
        echo json_encode($arr);
    }
    else{
        $arr = array();
        $arr[] = $usuarioConsultado;
        echo json_encode($arr);
    }
?>