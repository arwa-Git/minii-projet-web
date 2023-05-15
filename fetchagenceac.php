<?php
include_once("bd_connect.php");
$postdata = file_get_contents("php://input");


   
        $sql="SELECT * FROM agence ";
        $result=mysqli_query($mysqli,$sql);
        if (mysqli_num_rows($result) > 0) {
            $dataa = array();
            while($row = mysqli_fetch_assoc($result)) {
                $dataa[] = $row;
            }
            echo json_encode($dataa);
        } else {
            echo "0 résultats";
        }

?>