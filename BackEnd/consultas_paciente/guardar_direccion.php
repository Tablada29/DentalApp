<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    $json_direccion = file_get_contents('php://input');
    $datos_direccion = json_decode($json_direccion);

    include("../conexion.php");
    $conexion = conexion();

    $calle = $datos_direccion->calle;
    $numero_exterio = $datos_direccion->numero_exterior;
    $numero_interior = $datos_direccion->numero_interior;
    $colonia = $datos_direccion->colonia;
    $ciudad = $datos_direccion->ciudad;
    $estado = $datos_direccion->estado;
    $pais = $datos_direccion->pais;
    $codigo_postal = $datos_direccion->codigo_postal;
    $id_usuario = $datos_direccion->id_usuario;
    $address_of = $datos_direccion->address_of;


    $insercion = "INSERT INTO direcciones (calle, numero_exterior, numero_interior, colonia, ciudad, estado, pais, codigo_postal)
                VALUES ('$calle', '$numero_exterio', '$numero_interior', '$colonia', '$ciudad', '$estado', '$pais', '$codigo_postal')";
    
    $resultado_insercion = mysqli_query($conexion, $insercion);

    if($resultado_insercion){
        $ultima_direccion = "SELECT id_direccion FROM direcciones ORDER BY id_direccion desc LIMIT 1";
        $resultado_ultima_direccion = mysqli_query($conexion, $ultima_direccion);
        $id_direccion = "";
        while($registro = $resultado_ultima_direccion->fetch_array()){
            $id_direccion = $registro['id_direccion'];
        }

        $asignar_direccion = "INSERT INTO direcciones_usuarios (id_usuario, id_direccion, address_of)
                                VALUES ('$id_usuario', '$id_direccion', '$address_of')";

        $resultado_asignar_direccion = mysqli_query($conexion, $asignar_direccion);

        if($resultado_asignar_direccion){
            echo json_encode('OK');
        }
    }
?>