<?php 

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    $json_login = file_get_contents('php://input');
    $datos_login = json_decode($json_login);

    include("conexion.php");

    $conexion = conexion();

    $usuario = $datos_login->usuario;
    $pass = $datos_login->pass;

    $consulta = "SELECT u.id_usuario, u.usuario, u.correo, u.pass, u.estatus_registro, u.estado_actividad, u.id_rol,
                d_u.nombre, d_u.apellido_paterno, d_u.apellido_materno, d_u.sexo, d_u.edad, d_u.fecha_nacimiento, d_u.curp, d_u.cedula 
                 FROM usuarios u INNER JOIN datos_usuarios d_u ON u.id_usuario = d_u.id_usuario 
                 WHERE u.usuario = '$usuario'";
    $resultado = mysqli_query($conexion, $consulta);

    if($resultado){
      $datos_usuario = Array();
      while($row = $resultado->fetch_array()){
        if(password_verify($pass, $row['pass'])){
          $datos = Array(
            "id_usuario" => $row['id_usuario'],
            "usuario" => $row['usuario'],
            "correo" => $row['correo'],
            "estado_actividad" => $row['estado_actividad'],
            "estatus_registro" => $row['estatus_registro'],
            "rol" => $row['id_rol'],
            "nombre" => $row['nombre'],
            "apellido_paterno" => $row['apellido_paterno'],
            "apellido_materno" => $row['apellido_materno'],
            "sexo" => $row['sexo'],
            "edad" => $row['edad'],
            "fecha_nacimiento" => $row['fecha_nacimiento'],
            "curp" => $row['curp'],
            "cedula" => $row['cedula']
          );
          $datos_usuario[] = $datos;
          $datos = null;
        }
      }
      echo json_encode($datos_usuario);
    }


    /* $usuarioConsultado = mysqli_fetch_assoc($resultado);
    
    if(empty($usuarioConsultado['usuario'])){
      $arr = array();
      echo json_encode($arr);
    }else{
      $pass_consultada = $usuarioConsultado['pass'];
      if(password_verify($pass, $pass_consultada)){
          $arr = array();
          $arr[] = $usuarioConsultado;
          echo json_encode($arr);
      }else{
          $arr = array();
          echo json_encode($arr);
      }
    } */
?>