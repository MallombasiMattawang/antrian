<?php
if (empty($_SESSION['username']) AND empty($_SESSION['passuser'])){
    echo header("location:home.php?link=home");
}
else{
    $detail = mysql_query("SELECT * FROM 
                            video
                            WHERE 
                            id='$_GET[id]'");
    $r    = mysql_fetch_array($detail); 
   $aksi="modul/video/controller.php";
?>
<div class="row-fluid">
<div class="span12 grider">
<div class="widget widget-simple">
                                <div class="widget-header">
                                    <a href="?link=video"><i class="fontello-icon-pencil"></i>Video</a>/ Edit Video
                                </div>
                                <div class="widget-content">
                                    <div class="widget-body">
                                        <?php
    echo "
 <form method=POST enctype='multipart/form-data' action=$aksi?link=video&act=update>
          <input type=hidden name=id value=$r[id]>
          Judul     : <input type=text name='judul' size=30 value='$r[judul]'><br>
          File    : $r[nama_file]<br><br>
          Ganti File : <br><input class='btn fileinput-button' type=file name='fupload' ><br> 
          <div class='pull-right'>
          <button type='submit' class='btn btn-green'>Submit</button>
            <button class='btn btn' onclick=self.history.back()>cancel</button>
            </div>                            
          </form>        
";
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <!-- // Widget --> 
                            </div>
    </div>
<?php }?>