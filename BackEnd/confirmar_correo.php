<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    
    include("conexion.php");
    $coneccion = conexion();

    $usuario = $_GET["usuario"];

    $actualizar = "UPDATE usuarios SET estatus_registro=1 WHERE usuario = '$usuario'";
    $resultado = mysqli_query($coneccion, $actualizar);

    if($resultado){
        echo "Usuario: ".$usuario." ha sido confirmado, ahora puedes iniciar sesión en la aplicación";
    }else{
        echo "El usuario no pudo confirmarse";
    }

?>