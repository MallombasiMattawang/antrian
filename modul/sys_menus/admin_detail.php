 
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
<div class="navbar">
                            <div class="navbar-inner">
                                            <div class="fileupload-buttonbar">
                                                <ul class="nav">
                                                    <li><a href="?link=menus"><i class="fontello-icon-th-list"></i>Detail Menus</a></li> 
                                                    <li class="divider-vertical"></li>
                                                </ul>
                                                <!-- The fileinput-button span is used to style the file input field as button -->
                                                <ul class="btn-toolbar pull-right">
                                                    <li><a class="btn btn-blue " href="?link=menus&act=Add"> <i class="fontello-icon-plus-1"></i> 
                                                            <span>Tambah </span>
                                                        </a></li>
                                                        <li><a class="btn btn-yellow " href="?link=menus&act=Edit&id=<?php echo "$r[menus_id]"?>"> <i class="fontello-icon-pencil-1"></i> 
                                                            <span>Ubah </span>
                                                        </a></li>
                                                        <li><a class="btn btn-red" data-href="" data-toggle="modal" data-target="#confirm-delete"><i class="fontello-icon-trash-1"></i>
                                                                <span>Hapus </span></a></li>
                                                </ul>
                                            </div>
                                            <!-- // Fileupload-buttonbar --> 
                                        </div>
                                    </div>
<section>
    <div class="row-fluid">
        <div class="span12">
                            <div class="well well-box well-nice">
                                <!-- // content item -->
                                <table class="table table-striped table-content">
                                    <thead>
                                        <tr>
                                            <th>Property</th>
                                            <th>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                                        <tr>
                                                            <td class="center"><?php echo "ID"; ?></td>
                                                            <td class="center"><?php echo "$r[menus_id]"; ?></td>
                                                        </tr>
                                                         <tr>
                                                            <td class="center"><?php echo "Menus"; ?></td>
                                                            <td class="center"><?php echo "$r[name]" ?></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="center"><?php echo "Enable"; ?></td>
                                                            <td class="center"><?php echo "$r[enable]" ?></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="center"><?php echo "Parent"; ?></td>
                                                            <td class="center"><?php echo "$r[parent_id]" ?></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="center"><?php echo "Created by"; ?></td>
                                                            <td class="center"><?php
                                                                $created=mysql_query("SELECT nama_lengkap FROM users WHERE user_id='$r[created_by]'");
                                                                $w=mysql_fetch_array($created);       
                                                                echo "$w[nama_lengkap]";
                                                            ?></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="center"><?php echo "Created"; ?></td>
                                                            <td class="center"><?php echo "$r[created]" ?></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="center"><?php echo "Modified By"; ?></td>
                                                            <td class="center">
                                                                <?php $created=mysql_query("SELECT nama_lengkap FROM users WHERE user_id='$r[created_by]'");
                                                                $w=mysql_fetch_array($created);       
                                                                echo "$w[nama_lengkap]"; ?>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="center"><?php echo "Modified"; ?></td>
                                                            <td class="center"><?php echo "$r[modified]" ?></td>
                                                        </tr>
                                    </tbody>
                                </table>
                                <!-- // table-content --> 
                            </div>
                           
                        </div>
                        <!-- // Column -->
                        
                        </div>
                </section>
<div class="modal fade" id="confirm-delete" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Hapus Data </h4>
            </div>
            <div class="modal-body">
                <p>Anda Yakin Ingin Menghapus data ini ?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <a href="<?php echo "$control";?>?link=menus&act=delete&id=<?php echo "$r[menus_id]"?>" class="btn btn-danger danger">Delete</a>
            </div>
        </div>
    </div>
</div>
                        <script>
                            $('#modal').on('show', function() {
    $('#confirm-delete').on('show.bs.modal', function(e) {
    $(this).find('.danger').attr('href', $(e.relatedTarget).data('href'));
});
                            </script>
                            
 <?php }?>                           