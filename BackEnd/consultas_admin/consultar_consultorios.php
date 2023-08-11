<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    include("../conexion.php");
    $conexion = conexion();

    $consulta_consultorios = "SELECT c.id_consultorio, c.nombre_consultorio, CONCAT(d.calle, ', ', d.numero_exterior, ', ',d.numero_interior,', ',d.colonia,', ',d.ciudad,', ',d.estado,', ',d.pais,', ', d.codigo_postal) AS direccion 
                            FROM consultorios AS c INNER JOIN direcciones_consultorios AS d_c ON c.id_consultorio = d_c.id_consultorio
                            INNER JOIN direcciones AS d ON d_c.id_direccion = d.id_direccion";
    
    $resultado_consulta_consultorios = mysqli_query($conexion, $consulta_consultorios);

    if($resultado_consulta_consultorios){
        $consultorios = Array();
        while($registro = $resultado_consulta_consultorios->fetch_array()){
            $datos = Array(
                "id_consultorio" => $registro['id_consultorio'],
                "nombre_consultorio" => $registro['nombre_consultorio'],
                "direccion" => $registro['direccion']
            );

            $consultorios[] = $datos;
            $datos = null;
        }

        echo json_encode($consultorios);
    }
?>