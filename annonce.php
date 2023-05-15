<?php
include_once("bd_connect.php");
$postdata = file_get_contents("php://input");


   
        $sql="SELECT * FROM anonce ";
        $result=mysqli_query($mysqli,$sql);
        if (mysqli_num_rows($result) > 0) {
            $data = array();
            while($row = mysqli_fetch_assoc($result)) {
                $data[] = $row;
            }
            echo json_encode($data);
        } else {
            echo "0 résultats";
        }

?>
