<?php
include_once("bd_connect.php");
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);
    $rechdest = isset($request->rechdest) ? trim($request->rechdest) : '';
    $rechpr = isset($request->rechpr) ? trim($request->rechpr) : '';
    $rechda = isset($request->rechda) ? trim($request->rechda) : '';
    if (json_last_error() === JSON_ERROR_NONE) {

        
        $sql="SELECT * FROM demendeannonce WHERE dest='$rechdest' OR prix='$rechpr' OR datedebut='$rechda';";
        $result=mysqli_query($mysqli,$sql);
        $nums=mysqli_num_rows($result);
        $ans=mysqli_query($mysqli,$sql);
        $row = mysqli_fetch_assoc($ans);

        if($nums > 0) {
            $data=array('message'=>'success','annonce'=>$row);
            echo json_encode($data);
        } else {
            $data=array('message'=>'failed');
            echo json_encode($data);
        }
    } else {
        $data=array('message'=>'Invalid JSON');
        echo json_encode($data);
    }
}
?>
