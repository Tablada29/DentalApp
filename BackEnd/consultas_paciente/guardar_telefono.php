<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    $json_telefono = file_get_contents('php://input');
    $datos_telefono = json_decode($json_telefono);

    include("../conexion.php");
    $conexion = conexion();

    $telefono = $datos_telefono->telefono;
    $referencia = $datos_telefono->referencia;
    $id_usuario = $datos_telefono->id_usuario;

    $insercion = "INSERT INTO telefonos (telefono, referencia)
                    VALUES ('$telefono', '$referencia')";
    $resultado_insercion = mysqli_query($conexion, $insercion);

    if($resultado_insercion){
        $consulta_ultimo_telefono = "SELECT id_telefono FROM telefonos ORDER BY id_telefono desc LIMIT 1";
        $resultado_consulta_ultimo_telefono = mysqli_query($conexion, $consulta_ultimo_telefono);
        if($resultado_consulta_ultimo_telefono){
            $id_telefono = "";
            while($registro = $resultado_consulta_ultimo_telefono->fetch_array()){
                $id_telefono = $registro['id_telefono'];
                
            }
            $insertar_telefono_usuario = "INSERT INTO telefonos_usuarios (id_telefono, id_usuario)
                                            VALUES ($id_telefono, $id_usuario)";
            $resultado_insertar_telefono_usuario = mysqli_query($conexion, $insertar_telefono_usuario);
            if($resultado_insertar_telefono_usuario){
                echo json_encode('OK');
            }
        }
    }
?>