<?php
include_once("bd_connect.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);
    $NomCl = trim($request->NomCl);
    $PrenomCl = trim($request->PrenomCl);
    $add_mail = mysqli_real_escape_string($mysqli, trim($request->add_mail));
    $NumTelCl = trim($request->NumTelCl);
    $MotDePasse = mysqli_real_escape_string($mysqli,trim($request->MotDePasse));
    $type = "c";

    $PhotoProfile = isset($request->PhotoProfile) ? trim($request->PhotoProfile) : '';

    $DateDeNaiss = isset($request->DateDeNaiss) ? trim($request->DateDeNaiss) : '';


    $sql2="Select * FROM compte where add_mail='$add_mail' ;";
    $result=mysqli_query($mysqli,$sql2);
    $nums=mysqli_num_rows($result);
if($nums==0)
{
    
    $sql = "INSERT INTO client(NomCl,PrenomCl,add_mail,DateDeNaiss,NumTelCl,PhotoProfile,MotDePasse) 
            VALUE('$NomCl','$PrenomCl','$add_mail','$DateDeNaiss','$NumTelCl','$PhotoProfile','$MotDePasse');
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