<?php
include_once("bd_connect.php");

// Sanitize user input
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);
    $dest = mysqli_real_escape_string($mysqli, trim($request->dest));
    $prix = mysqli_real_escape_string($mysqli, trim($request->prix));
    $link = mysqli_real_escape_string($mysqli, trim($request->link));
    $datedebut = mysqli_real_escape_string($mysqli, trim($request->datedebut));
    $datefin = mysqli_real_escape_string($mysqli, trim($request->datefin));
    $desc = mysqli_real_escape_string($mysqli, trim($request->desc));
    $photo = mysqli_real_escape_string($mysqli, trim($request->photo));
    // Check if the record already exists
    $sql = "SELECT * FROM demendeannonce WHERE link='$link' and dest='$dest' and prix='$prix'and datedebut='$datedebut'and datefin='$datefin' and descr='$desc';";
    $result = mysqli_query($mysqli, $sql);
    if(!$result)
    {
        $data = array('message' => 'failed to fetch data');
        echo json_encode($data);
        exit;
    }

    $nums = mysqli_num_rows($result);
    if($nums > 0 )
    {
        $data = array('message' => 'exist');
        echo json_encode($data);
        exit;
    }

  if( $link=='' or $dest=='' or $prix=='' or $datedebut=='' or $datefin=='' or $desc=='' ) 
  {
    $data = array('message' => 'missed');
    echo json_encode($data);
    exit;
  }
    $sql = "INSERT INTO demendeannonce (dest, prix, link, datedebut, datefin, descr,photo) 
            VALUES ('$dest', '$prix', '$link', '$datedebut', '$datefin', '$desc','$photo')";

    if($mysqli->query($sql) === TRUE)
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
else
{
    $data = array('message' => 'invalid request');
    echo json_encode($data);
}
?>
