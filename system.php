<?php 
 session_start();
error_reporting(0);
include "timeout.php";
if($_SESSION[login]==1){
	if(!cek_login()){
		$_SESSION[login] = 0;
	}
}
if($_SESSION[login]==0){
  header('location:logout.php');
}
else{
if (empty($_SESSION['username']) AND empty($_SESSION['passuser']) AND $_SESSION['login']==0){
  echo "<link href='style.css' rel='stylesheet' type='text/css'>
 <center>Untuk mengakses modul, Anda harus login <br>";
  echo "<a href=index.php><b>LOGIN</b></a></center>";
}
else{
    include('headerSystem.php'); 
?>
<div id="main-container">
        
        <div id="main-content" class="main-content container-fluid">
            <?php
                            
                        			 include "root/content_admin.php"; 
                            
			 ?>	
            
        </div>
        <!-- // main-content --> 
        
    </div>
    <!-- // main-container  -->
    <?php
}
}
?>
		  
       
<?php include('footer.php'); ?>
