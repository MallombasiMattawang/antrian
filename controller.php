<?php
session_start();

 if (empty($_SESSION['username']) AND empty($_SESSION['passuser'])){
  echo header("location:index.php");
}
else{
//include "config/database.php";
include "config/fungsi_zona.php";
include('headerSystem.php'); 
$link=$_GET['link'];
$act=$_GET['act'];


if ($link=='save-antrian-transaksi' AND $act=='input'){   
    
    mysql_query("INSERT INTO `antrian_transaksi_save`(`nomor_antrian`, `nama`, `jenis_kelamin`, `no_telpon`, `created`, `created_by`) 
                                        VALUES ('$_POST[nomor_antrian]','$_POST[nama]','$_POST[jenis_kelamin]','$_POST[no_telpon]','$wita','$_SESSION[user_id]')");
  echo "<script>
                window.alert('Data: $_POST[nomor_antrian] Berhasil Ditambah $wita');
                window.location='system.php?link=menu-antrian-transaksi'
        </script> ";
}
elseif ($link=='save-antrian-administrasi' AND $act=='input'){   
    
    mysql_query("INSERT INTO `antrian_administrasi_save`(`nomor_antrian`, `nama`, `jenis_kelamin`, `no_telpon`, `created`, `created_by`) 
                                        VALUES ('$_POST[nomor_antrian]','$_POST[nama]','$_POST[jenis_kelamin]','$_POST[no_telpon]','$wita','$_SESSION[user_id]')");
  echo "<script>
                window.alert('Data: $_POST[nomor_antrian] Berhasil Ditambah $wita');
                window.location='system.php?link=menu-antrian-administrasi'
        </script> ";
}
elseif ($link=='daftar-customer-transaksi' AND $act=='delete'){
  mysql_query("DELETE FROM antrian_transaksi_save WHERE id='$_GET[id]'");
  echo "<script>
                window.alert('Data : $_GET[id], Berhasil Dihapus');
                window.location='system.php?link=daftar-customer-transaksi'
        </script> ";
}
elseif ($link=='daftar-customer-administrasi' AND $act=='delete'){
  mysql_query("DELETE FROM antrian_administrasi_save WHERE id='$_GET[id]'");
  echo "<script>
                window.alert('Data : $_GET[id], Berhasil Dihapus');
                window.location='system.php?link=daftar-customer-administrasi'
        </script> ";
}

 include('footer.php');
}
?>
