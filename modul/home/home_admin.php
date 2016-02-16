<?php
$detail = mysql_query("SELECT * FROM 
                            users
                            WHERE 
                            USER_ID='$_SESSION[user_id]'");
    $r    = mysql_fetch_array($detail);
?>
            
    <div class="widget widget-simple">
                                <div class="widget-header">
                                    <p><a href="#" data-toggle="modal" data-target="#confirm-detail"><img alt="foto" src="webroot/foto_akun/<?php echo "$r[FOTO]";?>" height="50" width="50"/></a> <span class="label label-success"><?php echo "$r[NAMA_LENGKAP]";?> </span></p>
                                </div>
                                <div class="widget-content">
                                    <div class="widget-body">
                                        <nav>
                    
                
                     </nav>
                <nav>
                    <ul class="nav nav-center " style="margin-top: 20px">
                       <li><a class="btn btn-well btn-glyph" href="?link=menu-antrian-transaksi" style="width:82px"><i class="  fontello-icon-credit-card f30"></i><span class="block">ANTRIAN TRANSAKSI</span></a></li>
                        <li><a class="btn btn-well btn-glyph" href="?link=daftar-customer-transaksi" style="width:82px" data-toggle="modal"><i class="fontello-icon-edit-2 f30"></i><span class="block">CUSTOMER TRANSAKSI</span></a></li>
                        
                        
                    </ul>
                <ul class="nav nav-center " style="margin-top: 20px">
                       <li><a class="btn btn-well btn-glyph" href="?link=menu-antrian-administrasi" style="width:82px"><i class=" fontello-icon-docs f30"></i><span class="block">ANTRIAN ADMINISTRASI</span></a></li>
                        <li><a class="btn btn-well btn-glyph" href="?link=daftar-customer-administrasi" style="width:82px" data-toggle="modal"><i class="fontello-icon-edit-2 f30"></i><span class="block">CUSTOMER ADMINISTRASI</span></a></li>
                        
                        
                    </ul>
                    <ul class="nav nav-center " style="margin-top: 20px">
                       <li><a class="btn btn-well btn-glyph" href="logout.php" style="width:82px"><i class=" fontello-icon-logout f30"></i><span class="block">EXIT</span></a></li>
                        
                        
                    </ul>
                     </nav>
                                    </div>
                                </div>
                            </div>
         
            <!-- // page content --> 
            
<div class="modal fade" id="confirm-detail" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Detail User </h4>
            </div>
            <div class="modal-body">
                <?php include 'config/fungsi_zona.php'; ?>
                Last Login : <?php echo "$wita";?>
              <table class="table table-bordered">
						  <thead>
							  <tr>
								  
                                                                    <th>Property</th>
                                                                    <th>Value</th>
                                                                    
							  </tr>
						  </thead>   
                  <tr>
                                                            <td class="center"><?php echo "Username"; ?></td>
                                                            <td class="center"><?php echo "$r[USERNAME]" ?></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="center"><?php echo "Nama Pengguna"; ?></td>
                                                            <td class="center"><?php echo "$r[NAMA_LENGKAP]" ?></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="center"><?php echo "NIP"; ?></td>
                                                            <td class="center"><?php echo "$r[NIP]" ?></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="center"><?php echo "Aktif"; ?></td>
                                                            <td class="center">
                                                                <?php 
                                                                        if($r[BLOKIR]=='0'){
                                                                            echo '<span class="label label-success">Aktif</span>';
                                                                        }else {
                                                                            echo '<span class="label label-important">Tidak Aktif</span>';
                                                                }
                                                                    ?>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="center"><?php echo "Level User"; ?></td>
                                                            <td class="center">
                                                                <?php 
                                                                        if($r[LEVEL_ID]=='1'){
                                                                            echo '<span class="label label-success">Administrator</span>';
                                                                        }else {
                                                                            echo '<span class="label label-important">User</span>';
                                                                }
                                                                    ?></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="center"><?php echo "Jenis Kelamin"; ?></td>
                                                            <td class="center">
                                                                <?php 
                                                                        if($r[JENIS_KELAMIN_ID]=='1'){
                                                                            echo 'Laki-Laki';
                                                                        }elseif ($r[JENIS_KELAMIN_ID]=='2') {
                                                                            echo 'Perempuan';
                                                                }
                                                                    ?></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="center"><?php echo "Alamat"; ?></td>
                                                            <td class="center"><?php echo "$r[ALAMAT]" ?></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="center"><?php echo "No.Telpon"; ?></td>
                                                            <td class="center"><?php echo "$r[TELPON]" ?></td>
                                                        </tr>
              </table>  
                
            </div>
            <div class="modal-footer">
                
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
                
            
            
       