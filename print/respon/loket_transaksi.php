<?php 
include '../config/database.php';
     $sql = mysql_query("SELECT no_loket FROM `loket`
                                        WHERE nama_loket = 'PEMBUATAN PAS'
                                        AND aktif = '1'");
      $r    = mysql_fetch_array($sql); 
      echo "$r[no_loket]";
?>