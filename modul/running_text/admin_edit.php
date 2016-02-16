<?php
session_start();
 if (empty($_SESSION['username']) AND empty($_SESSION['passuser'])){
   echo header("location:../../home.php?link=home");
}
else{
      $detail = mysql_query("SELECT * FROM 
                            running_text
                            WHERE 
                            id='$_GET[id]'");
    $r    = mysql_fetch_array($detail); 
    $control="modul/running_text/controller.php";
?>
<div class="row-fluid">
<div class="span12 grider">
<div class="widget widget-simple">
                                <div class="widget-header">
                                    <h4><i class="fontello-icon-wrench-2"></i> Edit Text Berjalan</h4>
                                </div>
                                <div class="widget-content">
                                    <div class="widget-body">
                                        <form id="formNextAccountSettings" class="form-condensed" action="<?php echo "$control?link=running-text&act=update";?>" method="POST">
                                             <input type="hidden" name="id" value="<?php echo "$r[id]"; ?>">
                                            <fieldset>
                                                <ul class="form-list">
                                                    <li class="control-group">
                                                        <label class="control-label">ISI TEXT</label>
                                                        <div class="controls">
                                                            <input class="input-block-level margin-00" type="text" name="isi_text" value="<?php echo "$r[isi_text]";?>" required>
                                                             </div>
                                                    </li>
                                                    <!-- // form item -->
                                                    
                                                    
                                                    <!-- // form item -->
                                                    
                                                    <li><br />
                                                <button type="submit" class="next finish btn btn-blue">Update</button>
                                                <a href="?link=running-text" class="next finish btn btn-green">Cancel</a>
                                            </li>
                                                </ul>
                                            </fieldset>
                                            <!-- // fieldset Input -->
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- // Widget --> 
                            </div>
    </div>
<?php }?>