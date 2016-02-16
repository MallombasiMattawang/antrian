<?php
session_start();
 if (empty($_SESSION['username']) AND empty($_SESSION['passuser'])){
 echo header("location:../../home.php?link=home");
}
else{
    $control="modul/save_antrian/controller.php";
     
?>
<br><br>
<div class="row-fluid">
<div class="span12 grider">
<div class="widget widget-simple">
                                <div class="widget-header">
                                    <h4><i class="fontello-icon-pencil"></i>Save Customer</h4>
                        
                                    
                                                    <!-- // form item -->
                                </div>
                                <div class="widget-content">
                                    <div class="widget-body">
                                      <form  id="formNextAccountSettings" class="form-condensed" action="<?php echo "$control?link=save-antrian&act=input";?>" method="POST">                                    
                                            
                                            <fieldset>
                                                
                                                <ul class="form-list">
                                                    <li class="control-group span4">
                                                                <label for="accountAddressState" class="control-label">No Antrian<span class="required">*</span></label>
                                                                <div class="controls">
                                                                    <input  class="input-large focused" type="text" name="nomor_antrian" value="<?php echo "$_SESSION[antrian_loket]" ?>" required>
                                                                </div>
                                                            </li>
                                                    <!-- // form item -->
                                                    <li class="control-group span4">
                                                                <label for="accountAddressState" class="control-label">Nama Lengkap<span class="required">*</span></label>
                                                                <div class="controls">
                                                                    <input  class="input-large focused " type="text" name="nama" value="" required>
                                                                </div>
                                                            </li>
                                                    <!-- // form item -->
                                                <li class="control-group span4">
                                                                <label for="accountAddressState" class="control-label">No telepon/Hp <span class="required">*</span></label>
                                                                <div class="controls">
                                                                    <input  class="input focused" type="text" name="no_telpon" value="" required>
                                                                </div>
                                                            </li>
                                                    <!-- // form item -->
                                           </ul>         
                                           <ul class="form-list">
                                                    
                                                            <li class="control-group span4">
                                                                <label for="accountAddressState" class="control-label">Jenis Kelamin <span class="required">*</span></label>
                                                                <div class="controls">
                                                                    <select  class="input focused combo" name="jenis_kelamin">
                                                                       <option value="LAKI-LAKI" selected>LAKI-LAKI</option>";
                                                                       <option value="PEREMPUAN">PEREMPUAN</option>";
                                                                    </select>
                                                                </div>
                                                            </li>
                                                    <!-- // form item -->
                                                    
                                           </ul>         
                                                                 
                                         <ul class="form-list pull-right">               
                                            <li><br />
                                                <button type="submit" class="next finish btn btn-blue">Save</button>
                                                <a href="?link=menu-antrian" class="next finish btn btn-green">Cancel</a>
                                            </li>
                                        </ul>
                                               
                                            </fieldset>
                                          </form>
                                            <!-- // fieldset Input -->
                                        
                                    </div>
                                </div>
                                
                            </div>
                            <!-- // Widget --> 
                            </div>
    </div>
<?php }?>
