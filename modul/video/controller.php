<?php
session_start();
 if (empty($_SESSION['username']) AND empty($_SESSION['passuser'])){
  echo "<link href='style.css' rel='stylesheet' type='text/css'>
 <center>Untuk mengakses modul, Anda harus login <br>";
  echo "<a href=../../index.php><b>LOGIN</b></a></center>";
}
else{
include "../../config/database.php";
include "../../config/fungsi_zona.php";
include "../../config/fungsi_thumb.php";
include "../../config/library.php";

$module=$_GET['link'];
$act=$_GET['act'];

// Hapus video
if ($module=='video' AND $act=='hapus'){
  mysql_query("DELETE FROM video WHERE id='$_GET[id]'");
  header('location:../../system.php?link='.$module);
}

// Input video
elseif ($module=='video' AND $act=='input'){
  $lokasi_file = $_FILES['fupload']['tmp_name'];
  $nama_file   = $_FILES['fupload']['name'];

  // Apabila ada gambar yang diupload
  if (!empty($lokasi_file)){
  
  $file_extension = strtolower(substr(strrchr($nama_file,"."),1));

  switch($file_extension){
    case "pdf": $ctype="application/pdf"; break;
    case "exe": $ctype="application/octet-stream"; break;
    case "zip": $ctype="application/zip"; break;
    case "rar": $ctype="application/rar"; break;
    case "doc": $ctype="application/msword"; break;
    case "xls": $ctype="application/vnd.ms-excel"; break;
    case "ppt": $ctype="application/vnd.ms-powerpoint"; break;
    case "gif": $ctype="image/gif"; break;
    case "png": $ctype="image/png"; break;
    case "jpeg":
    case "jpg": $ctype="image/jpg"; break;
    case "mp4": $ctype="video/mp4"; break;
    default: $ctype="application/proses";
  }

  if ($file_extension=='php'){
   echo "<script>window.alert('Upload Gagal, Pastikan File yang di Upload tidak bertipe *.PHP');
        window.location=('../../system.php?link=video')</script>";
  }
  elseif ($file_extension!='mp4'){
   echo "<script>window.alert('Upload Gagal, Pastikan File yang di bertipe *.mp4');
        window.location=('../../system.php?link=video')</script>";
  }
  else{
    UploadFile($nama_file);
    mysql_query("INSERT INTO video(judul,
                                    nama_file,
                                    tgl_posting) 
                            VALUES('$_POST[judul]',
                                   '$nama_file',
                                   '$tgl_sekarang')");
  header('location:../../system.php?link='.$module);
  }
  }
  else{
    mysql_query("INSERT INTO video(judul,
                                    tgl_posting) 
                            VALUES('$_POST[judul]',
                                   '$tgl_sekarang')");
  header('location:../../system.php?link='.$module);
  }
}

// Update donwload
elseif ($module=='video' AND $act=='update'){
  $lokasi_file = $_FILES['fupload']['tmp_name'];
  $nama_file   = $_FILES['fupload']['name'];

  // Apabila file tidak diganti
  if (empty($lokasi_file)){
    mysql_query("UPDATE video SET judul     = '$_POST[judul]'
                             WHERE id = '$_POST[id]'");
  header('location:../../system.php?link='.$module);
  }
  else{
  $file_extension = strtolower(substr(strrchr($nama_file,"."),1));

  switch($file_extension){
    case "pdf": $ctype="application/pdf"; break;
    case "exe": $ctype="application/octet-stream"; break;
    case "zip": $ctype="application/zip"; break;
    case "rar": $ctype="application/rar"; break;
    case "doc": $ctype="application/msword"; break;
    case "xls": $ctype="application/vnd.ms-excel"; break;
    case "ppt": $ctype="application/vnd.ms-powerpoint"; break;
    case "gif": $ctype="image/gif"; break;
    case "png": $ctype="image/png"; break;
    case "jpeg":
    case "jpg": $ctype="image/jpg"; break;
    default: $ctype="application/proses";
  }

  if ($file_extension=='php'){
   echo "<script>window.alert('Upload Gagal, Pastikan File yang di Upload tidak bertipe *.PHP');
        window.location=('../../system.php?link=video')</script>";
  }
  else{
    UploadFile($nama_file);
    mysql_query("UPDATE video SET judul     = '$_POST[judul]',
                                   nama_file    = '$nama_file'   
                             WHERE id = '$_POST[id]'");
  header('location:../../system.php?link='.$module);
  }
  }
}
}
?>
