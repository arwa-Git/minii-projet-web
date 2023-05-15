<?php
include_once("bd_connect.php");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);
    $add_mail = mysqli_real_escape_string($mysqli, trim($request->add_mail));
    $MotDePasse = mysqli_real_escape_string($mysqli,trim($request->MotDePasse));
    $code= mysqli_real_escape_string($mysqli,trim($request->code));
    $type = "d";

    $sql2="SELECT * FROM compte WHERE add_mail='$add_mail';";
    $result=mysqli_query($mysqli,$sql2);
    $nums=mysqli_num_rows($result);

    if($nums==0)
    {
        $sql = "INSERT INTO admins (add_mail,MotDePasse,code) 
                VALUES ('$add_mail','$MotDePasse','$code')";

        if ($mysqli->query($sql))
        {
            $sql2 = "INSERT INTO compte(add_mail,MotDePasse,type0) 
                     VALUES('$add_mail','$MotDePasse','$type')";

            if($mysqli->query($sql2))
            {
                $data=array('message'=>'success');
                echo json_encode($data);
            }
            else
            {
                $data=array('message'=>'failed');
                echo json_encode($data);
            }
        }
        else
        {
            $data=array('message'=>'failed');
            echo json_encode($data);
        }
    }
    else
    {
        $data=array('message'=>'exist');
        echo json_encode($data);
    }
}
?>
