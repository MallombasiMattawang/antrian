<?php
include "../../config/database.php";
$pass=sha1($_POST['PASSWORD_LAMA']);

$sql = mysql_query("select * from users
                   where PASSWORD='$pass'");
$ketemu = mysql_fetch_array($sql); 
//$ketemu[password];

// apabila username ditemukan, maka $ketemu bernilai 1,
// apabila username tidak ditemukan, maka $ketemu bernilai 0. 		
echo "$ketemu[PASSWORD]";
?>
