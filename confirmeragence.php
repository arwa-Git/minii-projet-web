<?php
include_once("bd_connect.php");
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);
    $id_agence = mysqli_real_escape_string($mysqli, trim($request->id_agence));
    $nomag=trim($request->nomag);
    $mat_fisc=trim($request->mat_fisc);
    $add_mail=mysqli_real_escape_string($mysqli, trim($request->add_mail));
    $num_tel1=trim($request->num_tel1);
    $num_tel2=trim($request->num_tel2);
    $address=trim($request->address);
    $CodePostal=trim($request->CodePostal);
    $PhotoProfile = isset($request->PhotoProfile) ? trim($request->PhotoProfile) : '';
    $MotDePasse=mysqli_real_escape_string($mysqli,trim($request->MotDePasse));
    if (json_last_error() === JSON_ERROR_NONE) {

        $sql = "INSERT INTO agence (id_agence,nomag,mat_fisc,add_mail,num_tel1,num_tel2,address,CodePostal,PhotoProfile,MotDePasse) 
        VALUE('$id_agence','$nomag','$mat_fisc','$add_mail','$num_tel1','$num_tel2','$address','$CodePostal','$PhotoProfile','$MotDePasse')";
        $sql2 = "DELETE FROM demanceagence WHERE id_agence='$id_agence'";
        if(($mysqli->query($sql) === TRUE) && ($mysqli->query($sql2) === TRUE))
        {
            $data = array('message' => 'success');
            echo json_encode($data);
        }
        else
        {
            $data = array('message' => 'failed');
            echo json_encode($data);
        }
    }
}
