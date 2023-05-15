<?php
include_once("bd_connect.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
    
    $request = json_decode($postdata);
    $nomag=trim($request->nomag);
    $mat_fisc=trim($request->mat_fisc);
    $add_mail=mysqli_real_escape_string($mysqli, trim($request->add_mail));
    $num_tel1=trim($request->num_tel1);
    $num_tel2=trim($request->num_tel2);
    $address=trim($request->address);
    $CodePostal=trim($request->CodePostal);
    $PhotoProfile = isset($request->PhotoProfile) ? trim($request->PhotoProfile) : '';
    $MotDePasse=mysqli_real_escape_string($mysqli,trim($request->MotDePasse));
    $type="a";


    $sql2="Select * FROM compte where add_mail='$add_mail' ;";
    $result=mysqli_query($mysqli,$sql2);
    $nums=mysqli_num_rows($result);
    if( $nomag=='' or $mat_fisc=='' or $add_mail=='' or $num_tel1=='' and $num_tel2=='' or $address=='' or $CodePostal==''or $MotDePasse=='') 
    {
      $data = array('message' => 'missed');
      echo json_encode($data);
      exit;
    }
    if($nums==0)
    {
        $sql="INSERT INTO demanceagence(nomag,mat_fisc,add_mail,num_tel1,num_tel2,address,CodePostal,PhotoProfile,MotDePasse) VALUE('$nomag','$mat_fisc','$add_mail','$num_tel1','$num_tel2','$address','$CodePostal','$PhotoProfile','$MotDePasse');
        INSERT INTO compte(add_mail,MotDePasse,type0) VALUES('$add_mail','$MotDePasse','$type')";
        if ($mysqli->multi_query($sql)){
            $data=array('message'=>'success');
            echo json_encode($data);
        }
        else{
            $data=array('message'=>'failed');
            echo json_encode($data);
        }
    }
    else{
        $data=array('message'=>'exist');
        echo json_encode($data);
    }
}
?>
