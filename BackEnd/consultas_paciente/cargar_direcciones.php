<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    $json_paciente = file_get_contents('php://input');
    $datos_paciente = json_decode($json_paciente);

    include("../conexion.php");
    $conexion = conexion();

    $id_usuario = $datos_paciente->id_usuario;

    $consulta_direcciones = "SELECT di.id_direccion, di.calle, di.numero_exterior, di.numero_interior, di.colonia, di.ciudad, di.codigo_postal, di.estado, di.pais, di_u.address_of 
                            FROM direcciones di 
                            INNER JOIN direcciones_usuarios di_u ON di.id_direccion = di_u.id_direccion
                            INNER JOIN usuarios u ON u.id_usuario = di_u.id_usuario
                            WHERE u.id_usuario = '$id_usuario'";

    $resultado_direcciones = mysqli_query($conexion, $consulta_direcciones);

    $direcciones = Array();

    if($resultado_direcciones){
        while($registro = $resultado_direcciones->fetch_array()){
            $datos = Array(
                "id_direccion" => $registro['id_direccion'],
                "calle" => $registro['calle'],
                "numero_exterior" => $registro['numero_exterior'],
                "numero_interior" => $registro['numero_interior'],
                "colonia" => $registro['colonia'],
                "ciudad" => $registro['ciudad'],
                "codigo_postal" => $registro['codigo_postal'],
                "estado" => $registro['estado'],
                "pais" => $registro['pais'],
                "address_of" => $registro['address_of']
            );

            $direcciones[] = $datos;
            $datos = null;
        }

        echo json_encode($direcciones);
    }
?>