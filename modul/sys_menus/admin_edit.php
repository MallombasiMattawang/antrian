<?php
if (empty($_SESSION['username']) AND empty($_SESSION['passuser'])){
    echo header("location:home.php?link=home");
}
else{
    $detail = mysql_query("SELECT * FROM 
                            menus
                            WHERE 
                            menus_id='$_GET[id]'");
    $r    = mysql_fetch_array($detail); 
    $control="modul/sys_menus/controller.php";
?>
<div class="row-fluid">
<div class="span12 grider">
<div class="widget widget-simple">
                                <div class="widget-header">
                                    <a href="?link=menus"><i class="fontello-icon-pencil"></i>Menus</a>/ Edit Menus
                                </div>
                                <div class="widget-content">
                                    <div class="widget-body">
                                        <form id="formNextAccountSettings" class="form-condensed" action="<?php echo "$control?link=menus&act=update";?>" method="POST">
                                            <input type="hidden" name="id" value="<?php echo "$r[menus_id]"; ?>">
                                            <fieldset>
                                                <ul class="form-list">
                                                    <li class="control-group">
                                                        <label class="control-label">Menus</label>
                                                        <div class="controls">
                                                            <input  class="span12" type="text" name="name" value="<?php echo "$r[name]"; ?>">
                                                             </div>
                                                    </li>
                                                    <!-- // form item -->
                                                    
                                                    <li class="control-group">
                                                        <label class="control-label">URL</label>
                                                        <div class="controls">
                                                            <input class="span12" type="text" name="url" value="<?php echo "$r[url]"; ?>">
                                                             </div>
                                                    </li>
                                                    <!-- // form item -->
                                                    
                                                    <li class="control-group">
                                                        <label class="control-label">Title</label>
                                                        <div class="controls">
                                                            <input class="span12" type="text" name="title" value="<?php echo "$r[title]"; ?>">
                                                             </div>
                                                    </li>
                                                    <!-- // form item -->
                                                    <li class="control-group">
                                                        <label for="accountGroup" class="control-label">Parent</label>
                                                        <div class="controls">
                                                            <select class="span12 combo" name="parent_id">
                                                                <?php $tampil=mysql_query("SELECT * FROM menus WHERE parent_id=$r[parent_id] ORDER BY menus_id");?>
                                                                <?php $tampil2=mysql_query("SELECT * FROM menus ORDER BY menus_id");?>
                                                                <?php if ($r[parent_id]==0){
                                                                    echo "<option value=0 selected>No Parent</option>";
                                                                } ?>
                                                                <?php
                                                                    while($w=mysql_fetch_array($tampil2)){
                                                                        if ($r[parent_id]==$w[menus_id]){
                                                                        echo "<option value=$w[menus_id] selected>$w[name]</option>";
                                                                        }
                                                                        else{
                                                                        echo "<option value=$w[menus_id]>$w[name]</option>";
                                                                        }
                                                                    }
                                                                ?>
                                                            </select>
                                                            <?php if ($r[enable]!=0){?>
                                                                <label class="control-label">
                                                                <input  class="checkbox" type="checkbox" value="1" name="enable" checked>
                                                                Enable</label>
                                                            <?php } else { ?>
                                                                    <label class="control-label">
                                                                <input  class="checkbox" type="checkbox" value="1" name="enable" >
                                                                Enable</label>
                                                               <?php }?>
                                                            
                                                        </div>
                                                    </li>
                                                    <li class="control-group">
                                                        <label for="accountGroup" class="control-label">Urutan</label>
                                                        <div class="controls">
                                                            <select class="span12 combo" name="lft">
                                                                <option selected="selected" value="0" ><?php echo "$r[lft]";?></option>
                                                                                <?php  
                                                                                $no=+1;
                                                                                $tampil=mysql_query("SELECT * FROM menus ORDER BY menus_id ASC");
                                                                                        while($w=mysql_fetch_array($tampil)){?>
                                                                                        <option value="<?php echo"$w[menus_id]";?>" ><?php echo"$w[menus_id]";?></option>
                                                                                        $no++;
                                                                                <?php }?>
                                                            </select>
                                                         
                                                        </div>
                                                    </li>
                                                    <!-- // form item -->
                                                    
                                                    <li>
                                                <button type="submit" class="pull-right btn btn-green">Submit </button>
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