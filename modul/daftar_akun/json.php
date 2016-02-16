<?php
session_start();
include "../../config/database.php";

echo '{ "aaData":  ';
$sql = mysql_query("SELECT USER_ID, USERNAME, NAMA_LENGKAP
                    FROM users");

    while ($r=mysql_fetch_array($sql)){
        $aaData[] = $r;
     }
    $json_format = json_encode($aaData);
echo $json_format;
echo " }";	



?>
