<?php
include_once("bd_connect.php");
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);
    $id_annonce = mysqli_real_escape_string($mysqli, trim($request->id_annonce));
    $dest = mysqli_real_escape_string($mysqli, trim($request->dest));
    $prix = mysqli_real_escape_string($mysqli, trim($request->prix));
    $link = mysqli_real_escape_string($mysqli, trim($request->link));
    $datedebut = mysqli_real_escape_string($mysqli, trim($request->datedebut));
    $datefin = mysqli_real_escape_string($mysqli, trim($request->datefin));
    $descr = mysqli_real_escape_string($mysqli, trim($request->descr));
    $photo = mysqli_real_escape_string($mysqli, trim($request->photo));
    if (json_last_error() === JSON_ERROR_NONE) {

        $sql = "INSERT INTO anonce (id_annonce, dest, prix, link, datedebut, datefin, descr, photo) 
        VALUES ('$id_annonce','$dest', '$prix', '$link', '$datedebut', '$datefin', '$descr', '$photo')";
        $sql2 = "DELETE FROM demendeannonce WHERE id_annonce='$id_annonce'";
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
