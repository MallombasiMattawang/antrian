<?php
session_start();
error_reporting(0);
 if (empty($_SESSION['username']) AND empty($_SESSION['passuser'])){
  echo header("location:index.php");
}
else{
include "../../config/database.php";
include "../../config/fungsi_zona.php";

$link=$_GET['link'];
$act=$_GET['act'];


if ($link=='loket' AND $act=='input'){   
    
  echo "<script>
                window.alert('Data: $_POST[name] Berhasil Ditambah $wita');
                window.location='../../system.php?link=$link'
        </script> ";
}
elseif ($link=='loket' AND $act=='delete'){
  
  echo "<script>
                window.alert('Data : $_GET[id], Berhasil Dihapus');
                window.location='../../system.php?link=$link'
        </script> ";
}

elseif ($link=='loket' AND $act=='update'){
  mysql_query("UPDATE loket SET no_loket='$_POST[no_loket]', 
                                aktif='$_POST[aktif]'
               WHERE id = '$_POST[id]'");
    echo "<script>
                window.alert('Data : $_POST[id], Berhasil Diubah');
                window.location='../../system.php?link=$link'
        </script> ";
}
}
?>
