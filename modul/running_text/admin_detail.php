<?php 
    $detail = mysql_query("SELECT * FROM 
                            running_text
                            WHERE 
                            id='$_GET[id]'");
    $r    = mysql_fetch_array($detail); 
    $control="modul/running_text/controller.php";
    ?>
<div class="navbar">
                                        <div class="navbar-inner">
                                            <div class="fileupload-buttonbar">
                                                <h4 class="title"><i class="fontello-icon-table"></i> Detail Agama</h4>
                                                <!-- The fileinput-button span is used to style the file input field as button -->
                                                <ul class="btn-toolbar pull-right">
                                                    <li><a class="btn btn-green " href="?link=running-text"><i class="fontello-icon-list-numbered-1"></i>
                                                            <span>Daftar </span>
                                                            </a></li>
                                                    <li><a class="btn btn-blue " href="?link=running-text&act=Add"> <i class="fontello-icon-plus-1"></i> 
                                                            <span>Tambah </span>
                                                        </a></li>
                                                        <li><a class="btn btn-yellow " href="?link=running-text&act=Edit&id=<?php echo "$r[id]"?>"> <i class="fontello-icon-pencil-1"></i> 
                                                            <span>Ubah </span>
                                                        </a></li>
                                                        <li><a class="btn btn-red " href="<?php echo "$control";?>?link=running-text&act=delete&id=<?php echo "$r[id]"?>" onClick="return confirm('Apakah Anda benar-benar mau menghapus <?php echo "$r[NAME]";?>?')"><i class="fontello-icon-trash-1"></i>
                                                            <span>Hapus </span>
                                                            </a></li>
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
                                                            <td class="center"><?php echo "$r[id]"; ?></td>
                                                        </tr>
                                                         <tr>
                                                            <td class="center"><?php echo "ISI TEXT"; ?></td>
                                                            <td class="center"><?php echo "$r[isi_text]" ?></td>
                                                        </tr>
                                                        
                                    </tbody>
                                </table>
                                <!-- // table-content --> 
                            </div>
                           
                        </div>
                        <!-- // Column -->
                        
                        </div>
                </section>