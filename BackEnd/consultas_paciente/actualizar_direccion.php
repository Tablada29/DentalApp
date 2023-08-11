<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    $json_direccion = file_get_contents('php://input');
    $datos_direccion = json_decode($json_direccion);

    include("../conexion.php");
    $conexion = conexion();

    $id_direccion = $datos_direccion->id_direccion;
    $calle = $datos_direccion->calle;
    $numero_exterior = $datos_direccion->numero_exterior;
    $numero_interior = $datos_direccion->numero_interior;
    $colonia = $datos_direccion->colonia;
    $ciudad = $datos_direccion->ciudad;
    $estado = $datos_direccion->estado;
    $pais = $datos_direccion->pais;
    $codigo_postal = $datos_direccion->codigo_postal;
    $address_of = $datos_direccion->address_of;

    $actualizar = "UPDATE direcciones 
                    SET calle = '$calle', numero_exterior = '$numero_exterior', numero_interior = '$numero_interior', colonia = '$colonia', 
                    ciudad = '$ciudad', estado = '$estado', pais = '$pais', codigo_postal = '$codigo_postal'
                    WHERE id_direccion = '$id_direccion'";
    
    $resultado_actualizar = mysqli_query($conexion, $actualizar);

    if($resultado_actualizar){
        $actualizar_direcciones_usuarios = "UPDATE direcciones_usuarios SET address_of = '$address_of' WHERE id_direccion = '$id_direccion'";
        $resultado_actualizar_direcciones_usuarios = mysqli_query($conexion, $actualizar_direcciones_usuarios);

        if($resultado_actualizar_direcciones_usuarios){
            echo json_encode('OK');
        }
    }
?>