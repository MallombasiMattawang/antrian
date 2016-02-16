<?php
session_start();
 if (empty($_SESSION['username']) AND empty($_SESSION['passuser'])){
  echo header("location:../../home.php?link=home");
}
else{
include "../../config/database.php";

$link=$_GET['link'];
$act=$_GET['act'];
$today = date("Y-m-d");   
// Input
if ($link=='running-text' AND $act=='input'){   

  mysql_query("INSERT INTO running_text( isi_text ) 
                           VALUES('  $_POST[isi_text]  |')");
  echo "<script>
                window.alert('Data Berhasil Ditambah');
                window.location='../../system.php?link=running-text'
        </script> ";
}

// Hapus 
elseif ($link=='running-text' AND $act=='delete'){  
  mysql_query("DELETE FROM running_text WHERE id='$_GET[id]'");
  echo "<script>
                window.alert('Data Dihapus');
                window.location='../../system.php?link=running-text'
        </script> ";
}

// Update 
elseif ($link=='running-text' AND $act=='update'){
  mysql_query("UPDATE running_text
                            SET isi_text='  $_POST[isi_text] |'
                            WHERE id = '$_POST[id]'");
  echo "<script>
                window.alert('Data Berhasil Diubah');
                window.location='../../system.php?link=running-text'
        </script> ";
}else {
    echo "<script>
                window.alert('SISTEM SEDANG BERMASALAH');
                window.location='../../system.php?link=running-text'
        </script> ";
}
}
?>
