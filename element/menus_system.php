
<?php
include "config/database.php";

if ($_SESSION['leveluser']=='admin' OR $_SESSION['leveluser']=='loket pas' OR $_SESSION['leveluser']=='loket administrasi'){
                $main = mysql_query("SELECT * FROM menus WHERE enable = '1' AND parent_id= 0 ORDER BY menus_id ASC");
                     while($r = mysql_fetch_array($main)) {?>
                        <ul class="nav pull-right">
                            <li class="dropdown"><a href="#" id="drop3" role="button" class="dropdown-toggle" data-toggle="dropdown"><?php echo "$r[name]";?> <b class="caret"></b></a>
                                <?php $submenu = mysql_query("SELECT * FROM menus WHERE enable = '1' AND parent_id=$r[menus_id] ORDER BY lft ASC");
                                    $jml = mysql_num_rows($submenu);
                                    // apabila sub menu ditemukan
                                        if($jml > 0) { ?>
                                            <ul class="dropdown-menu" role="menu" aria-labelledby="drop3">
                                                <?php while($w=mysql_fetch_array($submenu)){ ?>
                                                    <li class="dropdown-submenu"><a  href="<?php echo "$w[url]";?>"><?php echo "$w[name]";?></a>
                                                        <?php $subsubmenu = mysql_query("SELECT * FROM menus WHERE enable = '1' AND parent_id=$w[menus_id] ORDER BY lft ASC");
                                                        $jmlsub = mysql_num_rows($subsubmenu); 
                                                        if($jmlsub > 0) { ?>
                                                            <ul class="dropdown-menu">
                                                                <?php while($z=mysql_fetch_array($subsubmenu)){ ?>
                                                                <li><a  href="<?php echo "$z[url]";?>"><?php echo "$z[name]";?></a></li>
                                                                <?php }?>
                                                            </ul>
                                                    </li>
                                                    <?php }  else {
                                              echo '</li>'; } ?>
                                                <?php } ?>           
                                            </ul>
                            </li>
                    <?php }  else {
                        echo '</li>';}
                }?>
</ul>  </li>
    </ul>

<?php }

elseif ($_SESSION['leveluser']== null ) { ?>


<?php }
?>


 