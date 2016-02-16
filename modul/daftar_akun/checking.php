<?php
include "../../config/database.php";

$sql = mysql_query("select * from users
                   where USERNAME='$_POST[USERNAME]'");
$ketemu = mysql_num_rows($sql); 

// apabila username ditemukan, maka $ketemu bernilai 1,
// apabila username tidak ditemukan, maka $ketemu bernilai 0. 		
echo $ketemu;
?>
