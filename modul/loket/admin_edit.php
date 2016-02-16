<?php
if (empty($_SESSION['username']) AND empty($_SESSION['passuser'])){
    echo header("location:home.php?link=home");
}
else{
    $detail = mysql_query("SELECT * FROM 
                            loket
                            WHERE 
                            id='$_GET[id]'");
    $r    = mysql_fetch_array($detail); 
    $control="modul/loket/controller.php";
?>
<div class="row-fluid">
<div class="span12 grider">
<div class="widget widget-simple">
                                <div class="widget-header">
                                    <a href="?link=loket"><i class="fontello-icon-pencil"></i>Loket</a>/ Edit Loket
                                </div>
                                <div class="widget-content">
                                    <div class="widget-body">
                                        <form id="formNextAccountSettings" class="form-condensed" action="<?php echo "$control?link=loket&act=update";?>" method="POST">
                                            <input type="hidden" name="id" value="<?php echo "$r[id]"; ?>">
                                            <fieldset>
                                                <ul class="form-list">
                                                    
                                                    <!-- // form item -->
                                                    <li class="control-group">
                                                        <label for="accountGroup" class="control-label">No Loket</label>
                                                        <div class="controls">
                                                            <select class="span12 combo" name="no_loket">
                                                                <?php if ($r[no_loket]>0){
                                                                    echo "<option value=0 selected>$r[no_loket]</option>";
                                                                } ?>
                                                                <?php
                                                                        echo "<option value=1 >1</option>";
                                                                        echo "<option value=2 >2</option>";
                                                                        echo "<option value=3 >3</option>";
                                                                        echo "<option value=4 >4</option>";
                                                                        echo "<option value=5 >5</option>";
                                                                        echo "<option value=6 >6</option>";
                                                                        echo "<option value=7 >7</option>";
                                                                        echo "<option value=8 >8</option>";
                                                                        echo "<option value=9 >9</option>";
                                                                     
                                                                ?>
                                                            </select>
                                                            <?php if ($r[aktif]!=0){?>
                                                                <label class="control-label">
                                                                <input  class="checkbox" type="checkbox" value="1" name="aktif" checked>
                                                                Aktif</label>
                                                            <?php } else { ?>
                                                                    <label class="control-label">
                                                                <input  class="checkbox" type="checkbox" value="1" name="aktif" >
                                                                Aktif</label>
                                                               <?php }?>
                                                            
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