<?php
session_start();
error_reporting(0);
 if (empty($_SESSION['username']) AND empty($_SESSION['passuser'])){
  echo header("location:../../home.php?link=home");
}
else{
include "../../config/database.php";
include "../../config/fungsi_zona.php";
include "../../config/fungsi_thumb.php";

$link=$_GET['link'];
$act=$_GET['act'];
$today = gmdate("Y-m-d H:i:s", time()+60*60*8);
$lokasi_file    = $_FILES['fupload']['tmp_name'];
  $tipe_file      = $_FILES['fupload']['type'];
  $nama_file      = $_FILES['fupload']['name'];
  $acak           = rand(1,99);
  $nama_file_unik = $acak.$nama_file; 
// Input
if ($link=='pengguna-akun' AND $act=='input'){   

  if (!empty($lokasi_file)){
    if ($tipe_file != "image/jpeg" AND $tipe_file != "image/pjpeg" AND $tipe_file != "image/png"){
    echo "<script>
                window.alert('TIPE GAMBAR *JPG/PNG');
                window.location='../../system.php?link=pengguna-akun'
        </script> ";
    }
    else{
  UploadAkun($nama_file_unik);
  $pass =  sha1($_POST['PASSWORD']);
  mysql_query("INSERT INTO users(
                                                    USERNAME,
                                                    PASSWORD,
                                                    NIP,
                                                    NAMA_LENGKAP,
                                                    JENIS_KELAMIN_ID,
                                                    TEMPAT_LAHIR,
                                                    TGL_LAHIR,
                                                    FOTO,
                                                    ALAMAT,
                                                    TELPON,
                                                    LEVEL_ID,
                                                    BLOKIR,
                                                    CREATED,
                                                    CREATED_BY) 
                           VALUES('$_POST[USERNAME]',
                                   '$pass',
                                   '$_POST[NIP]',
                                   '$_POST[NAMA_LENGKAP]',
                                   '$_POST[JENIS_KELAMIN_ID]',
                                   '$_POST[TEMPAT_LAHIR]',
                                   '$_POST[TGL_LAHIR]',
                                   '$nama_file_unik',
                                   '$_POST[ALAMAT]',
                                   '$_POST[TELPON]',
                                   '$_POST[LEVEL_ID]',
                                   '$_POST[BLOKIR]',
                                   '$wita',
                                   '$_SESSION[user_id]')");
  $detail = mysql_query("SELECT * FROM 
                            users
                            WHERE 
                            USERNAME='$_POST[USERNAME]'");
     $r    = mysql_fetch_array($detail);
  echo "<script>
                window.alert('Data Berhasil Ditambah');
                window.location='../../system.php?link=pengguna-akun&act=Detail&id=$r[USER_ID]'
        </script> ";
}
  } 
  
  }
// Hapus 
elseif ($link=='pengguna-akun' AND $act=='delete'){  
    $detail = mysql_query("SELECT * FROM 
                            users
                            WHERE 
                            USER_ID='$_GET[id]'");
     $r    = mysql_fetch_array($detail);
        unlink("../../webroot/foto_akun/$r[FOTO]");   
        unlink("../../webroot/foto_akun/small_$r[FOTO]");   
        unlink("../../webroot/foto_akun/medium_$r[FOTO]");   
  mysql_query("DELETE FROM users WHERE USER_ID='$_GET[id]'");
  
  echo "<script>
                window.alert('Data Dihapus');
                window.location='../../system.php?link=pengguna-akun'
        </script> ";
}

// Update 
elseif ($link=='pengguna-akun' AND $act=='update'){
  if (empty($_POST['PASSWORD_BARU']) AND empty($lokasi_file)) {
      UploadAkun($nama_file_unik);
    mysql_query("UPDATE users SET 
                                  NIP = '$_POST[NIP]',
                                  NAMA_LENGKAP= '$_POST[NAMA_LENGKAP]',
                                  JENIS_KELAMIN_ID = '$_POST[JENIS_KELAMIN_ID]',
                                  TEMPAT_LAHIR = '$_POST[TEMPAT_LAHIR]',
                                  TGL_LAHIR = '$_POST[TGL_LAHIR]',
                                  ALAMAT = '$_POST[ALAMAT]',
                                  TELPON = '$_POST[TELPON]',
                                  LEVEL_ID = '$_POST[LEVEL_ID]',
                                  BLOKIR = '$_POST[BLOKIR]',
                                  MODIFIED='$today',
                                MODIFIED_BY='$_SESSION[user_id]'
                                WHERE  USER_ID='$_POST[id]'");
    echo "<script>
                window.alert('Data Diubah');
                window.location='../../system.php?link=pengguna-akun&act=Detail&id=$_POST[id]'
        </script> ";
  }
  // Apabila password diubah
  elseif (($_POST['PASSWORD_BARU']!='0') AND empty($lokasi_file)) {
      UploadAkun($nama_file_unik);
    $pass=sha1($_POST['PASSWORD_BARU']);
    $detail = mysql_query("SELECT * FROM 
                            users
                            WHERE 
                            USER_ID='$_GET[id]'");
     $r    = mysql_fetch_array($detail);
    mysql_query("UPDATE users SET PASSWORD        = '$pass',
                                  NIP = '$_POST[NIP]',
                                  NAMA_LENGKAP= '$_POST[NAMA_LENGKAP]',
                                  JENIS_KELAMIN_ID = '$_POST[JENIS_KELAMIN_ID]',
                                  TEMPAT_LAHIR = '$_POST[TEMPAT_LAHIR]',
                                  TGL_LAHIR = '$_POST[TGL_LAHIR]',
                                  
                                  ALAMAT = '$_POST[ALAMAT]',
                                  TELPON = '$_POST[TELPON]',
                                  LEVEL_ID = '$_POST[LEVEL_ID]',
                                  BLOKIR = '$_POST[BLOKIR]',
                                  MODIFIED='$today',
                                MODIFIED_BY='$_SESSION[user_id]'
                           WHERE USER_ID='$_POST[id]'");
  echo "<script>
                window.alert('Password dan Data Diubah');
                window.location='../../system.php?link=pengguna-akun&act=Detail&id=$_POST[id]'
        </script> ";  
  }
  elseif (empty($_POST['PASSWORD_BARU']) AND ($lokasi_file!='0')) {
      UploadAkun($nama_file_unik);
    //$pass=sha1($_POST['PASSWORD_BARU']);
    $detail = mysql_query("SELECT * FROM 
                            users
                            WHERE 
                            USER_ID='$_GET[id]'");
     $r    = mysql_fetch_array($detail);
    mysql_query("UPDATE users SET 
                                  NIP = '$_POST[NIP]',
                                  NAMA_LENGKAP= '$_POST[NAMA_LENGKAP]',
                                  JENIS_KELAMIN_ID = '$_POST[JENIS_KELAMIN_ID]',
                                  TEMPAT_LAHIR = '$_POST[TEMPAT_LAHIR]',
                                  TGL_LAHIR = '$_POST[TGL_LAHIR]',
                                  FOTO = '$nama_file_unik',
                                  ALAMAT = '$_POST[ALAMAT]',
                                  TELPON = '$_POST[TELPON]',
                                  LEVEL_ID = '$_POST[LEVEL_ID]',
                                  BLOKIR = '$_POST[BLOKIR]',
                                  MODIFIED='$today',
                                MODIFIED_BY='$_SESSION[user_id]'
                           WHERE USER_ID='$_POST[id]'");
  echo "<script>
                window.alert('Foto dan Data Diubah');
                window.location='../../system.php?link=pengguna-akun&act=Detail&id=$_POST[id]'
        </script> ";  
  }
  elseif (($_POST['PASSWORD_BARU']!='0') AND ($lokasi_file!='0')) {
      UploadAkun($nama_file_unik);
    $pass=sha1($_POST['PASSWORD_BARU']);
    $detail = mysql_query("SELECT * FROM 
                            users
                            WHERE 
                            USER_ID='$_GET[id]'");
     $r    = mysql_fetch_array($detail);
    mysql_query("UPDATE users SET PASSWORD        = '$pass',
                                  NIP = '$_POST[NIP]',
                                  NAMA_LENGKAP= '$_POST[NAMA_LENGKAP]',
                                  JENIS_KELAMIN_ID = '$_POST[JENIS_KELAMIN_ID]',
                                  TEMPAT_LAHIR = '$_POST[TEMPAT_LAHIR]',
                                  TGL_LAHIR = '$_POST[TGL_LAHIR]',
                                  FOTO = '$nama_file_unik',
                                  ALAMAT = '$_POST[ALAMAT]',
                                  TELPON = '$_POST[TELPON]',
                                  LEVEL_ID = '$_POST[LEVEL_ID]',
                                  BLOKIR = '$_POST[BLOKIR]',
                                  MODIFIED='$today',
                                MODIFIED_BY='$_SESSION[user_id]'
                           WHERE USER_ID='$_POST[id]'");
  echo "<script>
                window.alert('Password, Foto dan Data Diubah');
                window.location='../../system.php?link=pengguna-akun&act=Detail&id=$_POST[id]'
        </script> ";  
  }
  }
  //-----------------------------------------------------update oleh user---------------------------------------
  // Update 
elseif ($link=='pengguna-akun' AND $act=='updateuser'){
  if (empty($_POST['PASSWORD_BARU']) AND empty($lokasi_file)) {
      UploadAkun($nama_file_unik);
    mysql_query("UPDATE users SET 
                                  NIP = '$_POST[NIP]',
                                  NAMA_LENGKAP= '$_POST[NAMA_LENGKAP]',
                                  JENIS_KELAMIN_ID = '$_POST[JENIS_KELAMIN_ID]',
                                  TEMPAT_LAHIR = '$_POST[TEMPAT_LAHIR]',
                                  TGL_LAHIR = '$_POST[TGL_LAHIR]',
                                  ALAMAT = '$_POST[ALAMAT]',
                                  TELPON = '$_POST[TELPON]',
                                  MODIFIED='$today',
                                MODIFIED_BY='$_SESSION[user_id]'
                                WHERE  USER_ID='$_POST[id]'");
    echo "<script>
                window.alert('Data Diubah');
                window.location='../../system.php?link=pengguna-akun&act=DetailUser&id=$_POST[id]'
        </script> ";
  }
  // Apabila password diubah
  elseif (($_POST['PASSWORD_BARU']!='0') AND empty($lokasi_file)) {
      UploadAkun($nama_file_unik);
    $pass=sha1($_POST['PASSWORD_BARU']);
    $detail = mysql_query("SELECT * FROM 
                            users
                            WHERE 
                            USER_ID='$_GET[id]'");
     $r    = mysql_fetch_array($detail);
    mysql_query("UPDATE users SET PASSWORD        = '$pass',
                                  NIP = '$_POST[NIP]',
                                  NAMA_LENGKAP= '$_POST[NAMA_LENGKAP]',
                                  JENIS_KELAMIN_ID = '$_POST[JENIS_KELAMIN_ID]',
                                  TEMPAT_LAHIR = '$_POST[TEMPAT_LAHIR]',
                                  TGL_LAHIR = '$_POST[TGL_LAHIR]',
                                  
                                  ALAMAT = '$_POST[ALAMAT]',
                                  TELPON = '$_POST[TELPON]',
                                  MODIFIED='$today',
                                MODIFIED_BY='$_SESSION[user_id]'
                           WHERE USER_ID='$_POST[id]'");
  echo "<script>
                window.alert('Password dan Data Diubah');
                window.location='../../system.php?link=pengguna-akun&act=DetailUser&id=$_POST[id]'
        </script> ";  
  }
  elseif (empty($_POST['PASSWORD_BARU']) AND ($lokasi_file!='0')) {
      UploadAkun($nama_file_unik);
    //$pass=sha1($_POST['PASSWORD_BARU']);
    $detail = mysql_query("SELECT * FROM 
                            users
                            WHERE 
                            USER_ID='$_GET[id]'");
     $r    = mysql_fetch_array($detail);
    mysql_query("UPDATE users SET 
                                  NIP = '$_POST[NIP]',
                                  NAMA_LENGKAP= '$_POST[NAMA_LENGKAP]',
                                  JENIS_KELAMIN_ID = '$_POST[JENIS_KELAMIN_ID]',
                                  TEMPAT_LAHIR = '$_POST[TEMPAT_LAHIR]',
                                  TGL_LAHIR = '$_POST[TGL_LAHIR]',
                                  FOTO = '$nama_file_unik',
                                  ALAMAT = '$_POST[ALAMAT]',
                                  TELPON = '$_POST[TELPON]',
                                  MODIFIED='$today',
                                MODIFIED_BY='$_SESSION[user_id]'
                           WHERE USER_ID='$_POST[id]'");
  echo "<script>
                window.alert('Foto dan Data Diubah');
                window.location='../../system.php?link=pengguna-akun&act=DetailUser&id=$_POST[id]'
        </script> ";  
  }
  elseif (($_POST['PASSWORD_BARU']!='0') AND ($lokasi_file!='0')) {
      UploadAkun($nama_file_unik);
    $pass=sha1($_POST['PASSWORD_BARU']);
    $detail = mysql_query("SELECT * FROM 
                            users
                            WHERE 
                            USER_ID='$_GET[id]'");
     $r    = mysql_fetch_array($detail);
    mysql_query("UPDATE users SET PASSWORD        = '$pass',
                                  NIP = '$_POST[NIP]',
                                  NAMA_LENGKAP= '$_POST[NAMA_LENGKAP]',
                                  JENIS_KELAMIN_ID = '$_POST[JENIS_KELAMIN_ID]',
                                  TEMPAT_LAHIR = '$_POST[TEMPAT_LAHIR]',
                                  TGL_LAHIR = '$_POST[TGL_LAHIR]',
                                  FOTO = '$nama_file_unik',
                                  ALAMAT = '$_POST[ALAMAT]',
                                  TELPON = '$_POST[TELPON]',
                                  MODIFIED='$today',
                                MODIFIED_BY='$_SESSION[user_id]'
                           WHERE USER_ID='$_POST[id]'");
  echo "<script>
                window.alert('Password, Foto dan Data Diubah');
                window.location='../../system.php?link=pengguna-akun&act=DetailUser&id=$_POST[id]'
        </script> ";  
  }
  }
  else {
    echo "<script>
                window.alert('SISTEM SEDANG BERMASALAH');
                window.location='../../system.php?link=pengguna-akun'
        </script> ";
}
}
?>
