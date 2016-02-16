<?php
session_start();
 if (empty($_SESSION['username']) AND empty($_SESSION['passuser'])){
 echo header("location:../../home.php?link=home");
}
else{
        $control="modul/running_text/controller.php";
     
?>
 
<div class="row-fluid">
<div class="span12 grider">
<div class="widget widget-simple">
                                <div class="widget-header">
                                    <h4><i class="fontello-icon-wrench-2"></i> Add Text Berjalan</h4>
                                </div>
                                <div class="widget-content">
                                    <div class="widget-body">
                                        <form id="formNextAccountSettings" class="form-condensed" action="<?php echo "$control?link=running-text&act=input";?>" method="POST">
                                            <fieldset>
                                                <ul class="form-list">
                                                    
                                                    <!-- // form item -->
                                                    <li class="control-group">
                                                        <label class="control-label">ISI TEXT</label>
                                                        <div class="controls">
                                                            <input class="input-block-level margin-00" type="text" name="isi_text" value="" required>
                                                             </div>
                                                    </li>
                                                    
                                                     <li><br />
                                                <button type="submit" class="next finish btn btn-blue">Save</button>
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