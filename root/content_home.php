<?php
include "config/koneksi.php";
include "config/library.php";
include "config/fungsi_indotgl.php";
include "config/fungsi_combobox.php";
include "config/fungsi_rupiah.php";
include "class_paging.php";

 // Bagian Home
if ($_GET['link']=='home'){
 include "modul/home/home_publik.php"; 
}
if ($_GET['link']=='loginAdmin'){
 include "element/loginAdmin.php"; 
} // Apabila modul tidak ditemukan


?>
