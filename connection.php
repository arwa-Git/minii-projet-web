<?php
include_once("bd_connect.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);
    $add_mail=mysqli_real_escape_string($mysqli, trim($request->add_mail));
    $MotDePasse=mysqli_real_escape_string($mysqli,trim($request->MotDePasse));
    $sql="Select * FROM compte where add_mail='$add_mail' and MotDePasse='$MotDePasse';";
    $result=mysqli_query($mysqli,$sql);
    $nums=mysqli_num_rows($result);
    $sql2="Select type0 FROM compte where add_mail='$add_mail' and MotDePasse='$MotDePasse';";
    $type0=mysqli_query($mysqli,$sql2);
    $row = mysqli_fetch_assoc($type0);
    $type0_value = $row['type0'];   
    if($nums>0)
    { if($type0_value=='c'){
        $sql3 = "SELECT * FROM client WHERE add_mail='$add_mail'";
        $ansc=mysqli_query($mysqli,$sql3);
        $rowr = mysqli_fetch_assoc($ansc);
      }
      if($type0_value=='a'){
        $sql3 = "SELECT * FROM agence WHERE add_mail='$add_mail'";
        $ansc=mysqli_query($mysqli,$sql3);
        $rowr = mysqli_fetch_assoc($ansc);
      }
      if($type0_value=='d'){
        $sql3 = "SELECT * FROM admins WHERE add_mail='$add_mail'";
        $ansd=mysqli_query($mysqli,$sql3);
        $rowr = mysqli_fetch_assoc($ansd);
      }


        $data=array('message'=>'success','add_mail'=>$add_mail,'type'=>$type0_value,'compte'=>$rowr);
        echo json_encode($data);
    }
    else{
        $data=array('message'=>'failed');
        echo json_encode($data);
    }
}
?>