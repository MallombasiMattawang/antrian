<div class="row-fluid"><?php

 if (empty($_SESSION['username']) AND empty($_SESSION['passuser'])){
    echo header("location:../../home.php?link=home");
}
else{
    $controller="modul/sys_menus/controller.php";
?>
<div class="span12 grider">
<div class="widget widget-simple">
                                <div class="widget-header">
                                    <a href="?link=menus"><i class="fontello-icon-wrench-2"></i>Menus</a>/ Add Menus
                                </div>
                                <div class="widget-content">
                                    <div class="widget-body">
                                        <form id="formNextAccountSettings" class="form-condensed" action="<?php echo "$controller?link=menus&act=input";?>" method="POST">
                                            <fieldset>
                                                <ul class="form-list">
                                                    <li class="control-group">
                                                        <label class="control-label">Name</label>
                                                        <div class="controls">
                                                            <input  class="span12" type="text" name="name" value="" required>
                                                             </div>
                                                    </li>
                                                    <!-- // form item -->
                                                    
                                                    <li class="control-group">
                                                        <label class="control-label">URL</label>
                                                        <div class="controls">
                                                            <input class="span12" type="text" name="url" value="" required>
                                                             </div>
                                                    </li>
                                                    <!-- // form item -->
                                                    
                                                    <li class="control-group">
                                                        <label class="control-label">Title</label>
                                                        <div class="controls">
                                                            <input class="span12" type="text" name="title" value="" required>
                                                             </div>
                                                    </li>
                                                    <!-- // form item -->
                                                    <li class="control-group">
                                                        <label for="accountGroup" class="control-label">Parent</label>
                                                        <div class="controls">
                                                            <select class="span12 combo" name="parent_id">
                                                                <option selected="selected" value="0" >No Parent</option>
                                                                                <?php  $tampil=mysql_query("SELECT * FROM menus ORDER BY menus_id ASC");
                                                                                        while($w=mysql_fetch_array($tampil)){?>
                                                                                        <option value="<?php echo"$w[menus_id]";?>" ><?php echo"$w[name]";?></option>
                                                                                <?php }?>
                                                            </select>
                                                            
                                                            
                                                        </div>
                                                    </li>
                                                    <li class="control-group">
                                                        <label for="accountGroup" class="control-label">Urutan</label>
                                                        <div class="controls">
                                                            <select class="span12 combo" name="lft">
                                                                                <?php  
                                                                                $no=+1;
                                                                                $tampil=mysql_query("SELECT * FROM menus ORDER BY menus_id ASC");
                                                                                        while($w=mysql_fetch_array($tampil)){?>
                                                                                        <option value="<?php echo"$w[menus_id]";?>" ><?php echo"$w[menus_id]";?></option>
                                                                                        $no++;
                                                                                <?php }?>
                                                            </select>
                                                            
                                                            <label class="control-label">Enable &nbsp;
                                                                <input  class="checkbox" type="checkbox" value="1" name="enable">
                                                                </label>
                                                        </div>
                                                    </li>
                                                    <!-- // form item -->
                                               <li class="control-group pull-right"><br />                                                         
                                                <button type="submit" class="btn btn-green">Submit</button>
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