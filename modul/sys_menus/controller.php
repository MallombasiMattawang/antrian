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


if ($link=='menus' AND $act=='input'){   
    //mysql_query("INSERT INTO menus VALUES (2, 'Modul Transaksi', 'javascript:void(0)', 'Modul Transaksi', '1', 0, 3, 8, '2012-06-21', '2014-01-25', NULL, NULL);");
    mysql_query("INSERT INTO menus(
                                name,
                                url,
                                title,
                                enable,
                                parent_id,
                                lft,
                                created,
                                created_by) 
                           VALUES('$_POST[name]',
                                   '$_POST[url]',
                                   '$_POST[title]',
                                   '$_POST[enable]',
                                   '$_POST[parent_id]',
                                   '$_POST[lft]',
                                   '$wita',
                                   '$_SESSION[user_id]')");
  echo "<script>
                window.alert('Data: $_POST[name] Berhasil Ditambah $wita');
                window.location='../../system.php?link=$link'
        </script> ";
}
elseif ($link=='menus' AND $act=='delete'){
  mysql_query("DELETE FROM menus WHERE menus_id='$_GET[id]'");
  echo "<script>
                window.alert('Data : $_GET[id], Berhasil Dihapus');
                window.location='../../system.php?link=$link'
        </script> ";
}

elseif ($link=='menus' AND $act=='update'){
  mysql_query("UPDATE menus SET name='$_POST[name]', 
                                url='$_POST[url]',
                                enable='$_POST[enable]',
                                title='$_POST[title]',
                                parent_id='$_POST[parent_id]',
                                lft='$_POST[lft]'


               WHERE menus_id = '$_POST[id]'");
    echo "<script>
                window.alert('Data : $_POST[id], Berhasil Diubah');
                window.location='../../system.php?link=$link'
        </script> ";
}
}
?>
