<?php 
error_reporting(0);

include '../config/database.php';
     $sql = mysql_query("SELECT no_loket FROM `loket`
                                        WHERE nama_loket = 'TRANSAKSI'
                                        AND aktif = '1'");
      $r    = mysql_fetch_array($sql);
      if($r == null){
          echo '<p style="margin-top:10px; font-family:SimHei; font-size: 98px; font-weight:bold; color:red;">OFF</p>';
      }else{
        echo "<p style='margin-top:10px; font-family:SimHei; font-size: 98px; font-weight:bold; color:#FFFF00;'>$r[no_loket]</p>";
      }
?>