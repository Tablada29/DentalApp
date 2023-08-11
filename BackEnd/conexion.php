<?php  
      function conexion(){
            $host = "localhost";
            $user_name = "desaingx_dental";
            $user_password = "applee";
            $db_name = "desaingx_sistema_dental";
            $con = mysqli_connect($host,$user_name,$user_password,$db_name);

            return $con;
      }
?>