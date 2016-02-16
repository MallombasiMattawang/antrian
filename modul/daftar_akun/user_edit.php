<?php
session_start();
 if (empty($_SESSION['username']) AND empty($_SESSION['passuser'])){
  echo header("location:../../home.php?link=home");
}
   $detail = mysql_query("SELECT * FROM 
                            users
                            WHERE 
                            USER_ID='$_GET[id]'");
    $r    = mysql_fetch_array($detail);
    $control="modul/daftar_akun/controller.php";
 //   $date = date("Y-m-d H:i:s time()+60*60*7");
    ?>
<div class='row-fluid sortable'>
				<div class='box span12'>
					<div class='box-header well' data-original-title>
						<h2><i class='icon-edit'></i> Edit Akun</h2>
						<div class='box-icon'>
							<a href='?link=pengguna-akun' class='btn btn-round' title="Daftar" data-rel="tooltip"><i class='icon-th'></i></a>
							
						</div>
					</div>
					<div class='box-content'>
						    
                                            <form method="POST" action='<?php echo "$control?link=pengguna-akun&act=updateuser"; ?>' enctype='multipart/form-data'>
                                                <input type="hidden" name="id" value="<?php echo "$r[USER_ID]"; ?>">
                                                <div class="page-header">
                                                    <b> <label>#USERNAME Pengguna</label> <input class='input-xlarge focused' type='text' name="USERNAME" id="USERNAME" value="<?php echo "$r[USERNAME]";?>" required> &nbsp;&nbsp;</b>&nbsp;<span id="pesan"></span><br>
							   <b> <label>#Password Lama </label><input class='input-xlarge focused' type='password' name="PASSWORD_LAMA"  id="PASSWORD_LAMA" required> &nbsp;&nbsp;</b><span id="pesan_pas"></span><br>
                                                           <b> <label>#Password Baru </label><input class='input-xlarge focused' type='password' name="PASSWORD_BARU" id="PASSWORD"  value="" required> &nbsp;&nbsp;</b>
						  </div> 
						  <div class="row-fluid ">
                                                      
							  <div class="span4">
                                                              <div class='control-group error'>
								<label class='control-label '>Nama Lengkap</label>
								<div class='controls'>
								  <input class='input-large focused' name="NAMA_LENGKAP" type='text' value="<?php echo "$r[NAMA_LENGKAP]";?>" required>
								</div>
							  </div>
                                                              <div class='control-group error'>
								<label class='control-label '>NIP</label>
								<div class='controls'>
								  <input class='input-large focused' name="NIP" type='text' value="<?php echo "$r[NIP]";?>" required>
								</div>
							  </div>
							  <div class='control-group'>
								<label class='control-label'>Jenis Kelamin</label>
								<div class='controls' >
								   <select id='selectError3' name="JENIS_KELAMIN_ID" required>
									<?php $query=mysql_query("SELECT * from tref_jenis_kelamin");
                                                                                    if ($r[JENIS_KELAMIN_ID]==0){
                                                                                        echo "<option value=0 selected>- Pilih Jenis Kelamin -</option>";
                                                                                    }   
                                                                                    while($w=mysql_fetch_array($query)){
                                                                                        if ($r[JENIS_KELAMIN_ID]==$w[JENIS_KELAMIN_ID]){
                                                                                        echo "<option value=$w[JENIS_KELAMIN_ID] selected>$w[NAMA_JENIS_KELAMIN]</option>";
                                                                                        }
                                                                                        else{
                                                                                        echo "<option value=$w[JENIS_KELAMIN_ID]>$w[NAMA_JENIS_KELAMIN]</option>";
                                                                                        }
                                                                                    }?>
									
                                                                               }?>
								  </select>
								</div>
							  </div>
                                                              <div class='control-group'>
								<label class='control-label'>Alamat</label>
								<div class='controls'>
								  <input class='input-large focused' type='text' name="ALAMAT" type='text' value="<?php echo "$r[ALAMAT]";?>">
								</div>
							  </div>
							  </div>
							  <div class="span4">
                                                              <div class='control-group'>
								<label class='control-label'>Tempat Lahir</label>
								<div class='controls'>
								  <input class='input-Xlarge focused' type='text' name="TEMPAT_LAHIR" value="<?php echo "$r[TEMPAT_LAHIR]";?>">
								</div>
							  </div>
                                                              <div class='control-group'>
								<label class='control-label' for='selectError1'>Tanggal Lahir</label>
								<div class='controls'>
								  <input type='text' class='input-large datepicker' id='TANGGAL_LAHIR'  name="TGL_LAHIR"  value="<?php echo "$r[TGL_LAHIR]";?>">
								</div>
							  </div>
                                                              <div class='control-group error'>
								<label class='control-label'>No. Telpon</label>
								<div class='controls'>
								  <input class='input-large focused' type='text' name="TELPON" value="<?php echo "$r[TELPON]";?>" required >
								</div>
							  </div>
                                                              
                                                                 
							  </div>
							  <div class="span4 ">
                                                              <center><div class='control-group'>
							  <label class='control-label' for='fileInput'> 
                                                              <?php if ($r[FOTO]==''){
                                                                                        echo '<center><img alt="foto" src="imgs/Elite-Captain-Blue-icon.png" /><br>belum ada foto</center>';
                                                                                        }  else {
                                                                                            echo "<center><img src='webroot/foto_akun/$r[FOTO]' alt='$r[FOTO]' width='128' height='128'> </center>"; 
                                                                                        }?>
                                                          </label>
							  <div class='controls'>
								<input class='input-file uniform_on' id='fileInput' type='file' name='fupload' >
							  </div>
							</div></center>
							  </div>
							  
							  </div>
                                                
                                                <div class='form-actions'>
							  <button type='submit' class='btn btn-primary'>Submit</button>
							  <button type='reset' class='btn'>Cancel</button>
							</div>
                                                   </form>  
                                                     
						  </div><!--/row -->     
                                                    
					</div>
				</div><!--/span-->
                                <script> 
$(document).ready(function(){
   $("#USERNAME").change(function(){ 
		// tampilkan animasi loading saat pengecekan ke database
    $('#pesan').html("<img src='images/loader.gif' /> checking ...");	
    var USERNAME  = $("#USERNAME").val(); 
    
    $.ajax({
     type:"POST",
     url:"modul/daftar_akun/checking.php",    
     data: "USERNAME=" + USERNAME,
     success: function(data){                 
       if(data==0){
          $("#pesan").html(' <div class="alert alert-success"> USERNAME belum terdaftar </div>');
 	        $('#USERNAME').css('border', '3px #090 solid');	
       }  
       else{
          $("#pesan").html(' <div class="alert alert-error"> USERNAME sudah terdaftar </div>');
 	        $('#USERNAME').css('border', '3px #C33 solid');	
       }
     }
    }); 
	})
});
</script>
<?PHP $detail = mysql_query("SELECT * FROM 
                            users
                            WHERE 
                            USER_ID='$_GET[id]'");
    $r    = mysql_fetch_array($detail);
    $control="modul/daftar_akun/controller.php";
    
 //   $date = date("Y-m-d H:i:s time()+60*60*7");?>

<script>
$(document).ready(function(){
   $("#PASSWORD_LAMA").change(function(){ 
		// tampilkan animasi loading saat pengecekan ke database
    $('#pesan_pas').html("<img src='images/loader.gif' /> checking ...");	
    var PASSWORD_LAMA  = $("#PASSWORD_LAMA").val(); 
    
    $.ajax({
     type:"POST",
     url:"modul/daftar_akun/checking_pass.php",    
     data: "PASSWORD_LAMA=" + PASSWORD_LAMA,
     success: function(data){                 
         if(data=='<?php echo "$r[PASSWORD]";?>'){
          $("#pesan_pas").html(' <div class="alert alert-success"> PASSWORD SUDAH SAMA </div>');
 	        $('#PASSWORD_LAMA').css('border', '3px #090 solid');	
       }  
       else{
          $("#pesan_pas").html(' <div class="alert alert-error"> PASSWORD BELUM SAMA </div>');
 	        $('#PASSWORD_LAMA').css('border', '3px #C33 solid');	
       }
     }
    }); 
	})
});
</script>
<script type="text/javascript">
      $(document).ready(function(){      
	     if ($('.page-header').size()) {
		      $.getScript(
			       'js/jquery.passroids.min.js',
			         function() {
				          $('form').passroids({
					           main : "#PASSWORD"
				          });
			         }
		      );
	     }
      });
    </script>