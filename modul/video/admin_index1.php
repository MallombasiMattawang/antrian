<?php
session_start();
 if (empty($_SESSION['username']) AND empty($_SESSION['passuser'])){
  echo "<link href='style.css' rel='stylesheet' type='text/css'>
 <center>Untuk mengakses modul, Anda harus login <br>";
  echo "<a href=../../index.php><b>LOGIN</b></a></center>";
}
else{
$aksi="modul/video/controller.php";
switch($_GET[act]){
  // Tampil Download
  default:
    echo "<article class='module width_3_quarter'>
		<header><h3 class='tabs_involved'>Download </h3>
                
		<ul class='tabs'>
   			<li><a href='?link=video&act=tambahvideo';'>New Download</a></li>
    		
		</ul>
                     
		</header>
            <div class='tab_container'>
			<div id='tab1' class='tab_content'>
          
          <table class='datatable'><thead>
          <tr><th class='center'>no</th>
          <th class='left'>judul</th>
          <th class='left'>nama file</th>
          <th class='left'>tgl. posting</th>
          <th class='center'>aksi</th></tr></thead><tbody>";

    $p      = new Paging;
    $batas  = 15;
    $posisi = $p->cariPosisi($batas);

    $tampil=mysql_query("SELECT * FROM video ORDER BY id DESC");

    $no = $posisi+1;
    while ($r=mysql_fetch_array($tampil)){
      $tgl=tgl_indo($r[tgl_posting]);
      echo "<tr><td class='center' width='25'>$no</td>
                <td class='left'>$r[judul]</td>
                <td class='left'>$r[nama_file]</td>
                <td class='left'>$tgl</td>
                <td class='center'><a href=?link=video&act=editvideo&id=$r[id_video]><img src='images/edit.png' border='0' title='edit' /></a>
	                  <a href=$aksi?link=video&act=hapus&id=$r[id_video]><img src='images/del.png' border='0' title='hapus' /></a>
		        </tr>";
    $no++;
    }
    echo "</tbody></table>";
    $jmldata=mysql_num_rows(mysql_query("SELECT * FROM video"));
    $jmlhalaman  = $p->jumlahHalaman($jmldata, $batas);
    $linkHalaman = $p->navHalaman($_GET[halaman], $jmlhalaman);

    echo "<div class=pagination>$linkHalaman</div><br>";    
    break;
  
  case "tambahvideo":
    echo "<article class='module width_3_quarter'>
		<header><h3 class='tabs_involved'>add video </h3>
                
		<ul class='tabs'>
   			<li><a href='?link=video';'>List Download</a></li>
    		
		</ul>
                     
		</header>
            <div class='tab_container'>
			<div id='tab1' class='tab_content'>
          <form method=POST action='$aksi?link=video&act=input' enctype='multipart/form-data'>
          <table class='list'><tbody>
          <tr><td class='left'>Judul</td><td class='left'>  : <input type=text name='judul' size=30></td></tr>
          <tr><td class='left'>File</td><td class='left'> : <input type=file name='fupload' size=40></td></tr>
          <tr><td class='left' colspan=2><input type=submit value=Simpan>
                            <input type=button value=Batal onclick=self.history.back()></td></tr>
          </tbody></table></form><br><br><br>";
     break;
    
  case "editvideo":
    $edit = mysql_query("SELECT * FROM video WHERE id_video='$_GET[id]'");
    $r    = mysql_fetch_array($edit);

    echo "<article class='module width_3_quarter'>
		<header><h3 class='tabs_involved'>add video </h3>
                
		<ul class='tabs'>
   			<li><a href='?link=video';'>List Download</a></li>
    		
		</ul>
                     
		</header>
            <div class='tab_container'>
			<div id='tab1' class='tab_content'>
          <form method=POST enctype='multipart/form-data' action=$aksi?link=video&act=update>
          <input type=hidden name=id value=$r[id_video]>
          <table class='list'><tbody>
          <tr><td class='left'>Judul</td><td class='left'>     : <input type=text name='judul' size=30 value='$r[judul]'></td></tr>
          <tr><td class='left'>File</td><td class='left'>    : $r[nama_file]</td></tr>
          <tr><td class='left'>Ganti File</td><td class='left'> : <input type=file name='fupload' size=30> *)</td></tr>
          <tr><td class='left'colspan=2>*) Apabila file tidak diubah, dikosongkan saja.</td></tr>
          <tr><td class='left' colspan=2><input type=submit value=Update>
                            <input type=button value=Batal onclick=self.history.back()></td></tr>
          </tbody></table></form>";
    break;  
}
}
?>
